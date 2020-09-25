import * as gracely from "gracely"
import * as authly from "authly"
import { KeyInfo as CardConfigurationKeyInfo } from "../../Configuration/Card/KeyInfo"

export interface KeyInfo extends authly.Payload, CardConfigurationKeyInfo {
	sub: string
	iss: string
	aud: "public" | "private"
	iat: number
	name: string
	url: string
}

export namespace KeyInfo {
	export function is(value: KeyInfo | any): value is KeyInfo {
		return (
			typeof value == "object" &&
			authly.Identifier.is((value as any).sub) &&
			typeof (value as any).iss == "string" &&
			typeof (value as any).iat == "number" &&
			((value as any).aud == "public" || (value as any).aud == "private") &&
			typeof value.name == "string" &&
			typeof value.url == "string" &&
			CardConfigurationKeyInfo.is(value)
		)
	}
	export function flaw(value: any | KeyInfo): gracely.Flaw {
		return {
			type: "model.Merchant.V1.Key.KeyInfo",
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
							typeof value.aud == "string" || {
								property: "aud",
								type: `"public" | "private"`,
								condition: "Key audience.",
							},
							typeof value.iat == "number" || { property: "iat", type: "number", condition: "Issued timestamp." },
							typeof value.name == "string" || { property: "name", type: "string" },
							typeof value.url == "string" || { property: "url", type: "string" },
							...(CardConfigurationKeyInfo.flaw(value).flaws || []),
					  ].filter(gracely.Flaw.is) as gracely.Flaw[]),
		}
	}
}
