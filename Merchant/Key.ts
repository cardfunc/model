import * as gracely from "gracely"
import * as authly from "authly"
import { Configuration } from "./Configuration"
import * as V1 from "./V1"

export interface Key {
	sub: string
	iss: string
	aud: "public" | "private"
	iat: number
	name: string
	url: string
	card: Configuration & {
		url: string
		id?: string
	}
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
			Configuration.is(value.card) &&
			typeof value.card.url == "string" &&
			(value.card.id == undefined || authly.Identifier.is(value.card.id))
	}
	export function flaw(value: any | Key): gracely.Flaw {
		return {
			type: "model.Key",
			flaws: typeof value != "object" ? undefined :
				[
					typeof value.sub == "string" || { property: "sub", type: "authly.Identifier", condition: "Merchant identifier." },
					typeof value.iss == "string" || { property: "iss", type: "string", condition: "Key issuer." },
					typeof value.aud == "string" || { property: "aud", type: `"public" | "private"`, condition: "Key audience." },
					typeof value.iat == "number" || { property: "iat", type: "number", condition: "Issued timestamp." },
					typeof value.name == "string" || { property: "name", type: "string" },
					typeof value.url == "string" || { property: "url", type: "string" },
					(Configuration.is(value.card) && typeof value.card.url == "string" && (value.card.id == undefined || authly.Identifier.is(value.card.id))) || { property: "card", type: "Key.Configuration & { url: string, id?: string }", flaws: [
						...(Configuration.flaw(value.card).flaws ?? []),
						typeof value.card.url == "string" || { property: "url", type: "string" },
						value.card.id == undefined || authly.Identifier.is(value.card.id) || { property: "id", type: "string | undefined" },
					] },
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
}
