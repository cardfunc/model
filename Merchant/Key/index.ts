import * as gracely from "gracely"
import * as authly from "authly"
import { Configuration } from "../Configuration"
import { Safe as KSafe } from "./Safe"
import * as V1 from "../V1"

export interface Key {
	sub: string
	iss: string
	aud: "public" | "private"
	iat: number
	name: string
	url: string
	card: Configuration
	mixed?: authly.Token
}

export namespace Key {
	export function is(value: any | Key): value is Key {
		return typeof value == "object" &&
			authly.Identifier.is(value.sub) &&
			typeof value.iss == "string" &&
			(value.aud == "public" || value.aud == "private") &&
			typeof value.iat == "number" &&
			typeof value.name == "string" &&
			typeof value.url == "string" &&
			(value.mixed == undefined || authly.Token.is(value.mixed)) &&
			Configuration.is(value.card)
	}
	export function flaw(value: any | Key): gracely.Flaw {
		return {
			type: "model.Merchant.Key",
			flaws: typeof value != "object" ? undefined :
				[
					typeof value.sub == "string" || { property: "sub", type: "authly.Identifier", condition: "Merchant identifier." },
					typeof value.iss == "string" || { property: "iss", type: "string", condition: "Key issuer." },
					typeof value.aud == "string" || { property: "aud", type: `"public" | "private"`, condition: "Key audience." },
					typeof value.iat == "number" || { property: "iat", type: "number", condition: "Issued timestamp." },
					typeof value.name == "string" || { property: "name", type: "string" },
					typeof value.url == "string" || { property: "url", type: "string" },
					value.mixed == undefined || typeof value.mixed == "string" || { property: "mixed", type: "authly.Token", condition: "Alternate key." },
					...(Configuration.flaw(value.card).flaws ?? [{ property: "card", type: "model.Merchant.Configuration", flaws: undefined }]),
				].filter(gracely.Flaw.is) as gracely.Flaw[],
		}
	}
	export function upgrade(key: Key | V1.Key): Key
	export function upgrade(key: Key | V1.Key | undefined): Key | undefined
	export function upgrade(key: Key | V1.Key | undefined): Key | undefined {
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
	// tslint:disable: no-shadowed-variable
	export type Safe = KSafe
	export namespace Safe {
		export const is = KSafe.is
		export const flaw = KSafe.flaw
		export const upgrade = KSafe.upgrade
	}
}
