import * as gracely from "gracely"
import * as authly from "authly"
import { KeyInfo as ConfigurationKeyInfo } from "../Configuration/KeyInfo"
import { Audience } from "./Audience"
import * as model from "../../index"

export interface KeyInfo {
	sub: string
	iss: string
	aud: Audience | Audience[]
	iat: number
	name: string
	url: string
	card: ConfigurationKeyInfo
	mixed?: authly.Token
}

export namespace KeyInfo {
	export function is(value: any | KeyInfo): value is KeyInfo {
		return (
			typeof value == "object" &&
			authly.Identifier.is(value.sub) &&
			typeof value.iss == "string" &&
			(Audience.is(value.aud) || (Array.isArray(value.aud) && value.aud.every(Audience.is))) &&
			typeof value.iat == "number" &&
			typeof value.name == "string" &&
			typeof value.url == "string" &&
			(value.mixed == undefined || authly.Token.is(value.mixed)) &&
			ConfigurationKeyInfo.is(value.card)
		)
	}
	export function flaw(value: any | KeyInfo): gracely.Flaw {
		return {
			type: "model.Merchant.Key.KeyInfo",
			flaws:
				typeof value != "object"
					? undefined
					: ([
							typeof value.sub == "string" || {
								property: "sub",
								type: "authly.Identifier",
								condition: "Merchant identifier.",
							},
							typeof value.iss == "string" || { property: "iss", type: "string", condition: "Key issuer." },
							Audience.is(value.aud) ||
								(Array.isArray(value.aud) && value.aud.every(Audience.is)) || {
									property: "aud",
									type: `"agent" | "account" | "public" | "private"`,
									condition: "Key audience.",
								},
							typeof value.iat == "number" || { property: "iat", type: "number", condition: "Issued timestamp." },
							typeof value.name == "string" || { property: "name", type: "string" },
							typeof value.url == "string" || { property: "url", type: "string" },
							value.mixed == undefined ||
								typeof value.mixed == "string" || {
									property: "mixed",
									type: "authly.Token",
									condition: "Alternate key.",
								},
							...(ConfigurationKeyInfo.flaw(value.card).flaws ?? [
								{ property: "card", type: "model.Merchant.Configuration.KeyInfo", flaws: undefined },
							]),
					  ].filter(gracely.Flaw.is) as gracely.Flaw[]),
		}
	}
	export function upgrade(key: KeyInfo | model.Merchant.V1.Key.KeyInfo): KeyInfo
	export function upgrade(key: KeyInfo | model.Merchant.V1.Key.KeyInfo | undefined): KeyInfo | undefined
	export function upgrade(key: KeyInfo | model.Merchant.V1.Key.KeyInfo | undefined): KeyInfo | undefined {
		return key == undefined
			? undefined
			: is(key)
			? key
			: {
					sub: key.sub,
					iss: key.iss,
					aud: key.aud,
					iat: key.iat,
					name: key.name,
					url: key.url,
					card: {
						url: key.iss,
						id: key.sub,
						country: key.country,
						acquirer: key.acquirer,
						mid: key.mid,
						mcc: key.mcc,
						emv3d: key.emv3d,
					},
			  }
	}
	export async function unpack(
		key: authly.Token | undefined,
		...audience: ("private" | "public" | "account")[]
	): Promise<KeyInfo | undefined> {
		let result
		if (key) {
			result = await authly.Verifier.create().verify(key, ...audience)
			if (result && (result as any).option?.card) {
				const cardKey = await authly.Verifier.create().verify((result as any).option.card, ...audience)
				result = cardKey && model.Merchant.V1.Key.KeyInfo.is(cardKey) ? upgrade(cardKey) : undefined
			} else {
				if (model.Merchant.V1.Key.KeyInfo.is(result))
					result = model.Merchant.Key.KeyInfo.upgrade(result)
				if (!model.Merchant.Key.KeyInfo.is(result))
					result = undefined
			}
		}
		return result
	}
}
