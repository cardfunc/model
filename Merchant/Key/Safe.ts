import * as gracely from "gracely"
import * as authly from "authly"
import { Safe as ConfigurationSafe } from "../Configuration/Safe"
import * as V1 from "../V1"

export interface Safe {
	sub: string
	iss: string
	aud: "public" | "private"
	iat: number
	name: string
	url: string
	card: ConfigurationSafe
	mixed?: authly.Token
}

export namespace Safe {
	export function is(value: any | Safe): value is Safe {
		return typeof value == "object" &&
			authly.Identifier.is(value.sub) &&
			typeof value.iss == "string" &&
			(value.aud == "public" || value.aud == "private") &&
			typeof value.iat == "number" &&
			typeof value.name == "string" &&
			typeof value.url == "string" &&
			(value.mixed == undefined || authly.Token.is(value.mixed)) &&
			ConfigurationSafe.is(value.card)
	}
	export function flaw(value: any | Safe): gracely.Flaw {
		return {
			type: "model.Merchant.Key.Safe",
			flaws: typeof value != "object" ? undefined :
				[
					typeof value.sub == "string" || { property: "sub", type: "authly.Identifier", condition: "Merchant identifier." },
					typeof value.iss == "string" || { property: "iss", type: "string", condition: "Key issuer." },
					typeof value.aud == "string" || { property: "aud", type: `"public" | "private"`, condition: "Key audience." },
					typeof value.iat == "number" || { property: "iat", type: "number", condition: "Issued timestamp." },
					typeof value.name == "string" || { property: "name", type: "string" },
					typeof value.url == "string" || { property: "url", type: "string" },
					value.mixed == undefined || typeof value.mixed == "string" || { property: "mixed", type: "authly.Token", condition: "Alternate key." },
					...(ConfigurationSafe.flaw(value.card).flaws ?? [{ property: "card", type: "model.Merchant.Configuration.Safe", flaws: undefined }]),
				].filter(gracely.Flaw.is) as gracely.Flaw[],
		}
	}
	export function upgrade(key: Safe | V1.Key.Safe): Safe
	export function upgrade(key: Safe | V1.Key.Safe | undefined): Safe | undefined
	export function upgrade(key: Safe | V1.Key.Safe | undefined): Safe | undefined {
		return key == undefined
			? undefined
			: is(key)
			?	key
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
				}
			}
	}
}
