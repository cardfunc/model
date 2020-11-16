import * as gracely from "gracely"
import * as authly from "authly"
import { Card as CardConfiguration } from "../Card"

export interface Key extends authly.Payload, CardConfiguration {
	sub: string
	iss: string
	aud: "public" | "private"
	iat: number
	name: string
	url: string
}

export namespace Key {
	export function is(value: Key | any): value is Key {
		return (
			typeof value == "object" &&
			authly.Identifier.is((value as any).sub) &&
			typeof (value as any).iss == "string" &&
			typeof (value as any).iat == "number" &&
			((value as any).aud == "public" || (value as any).aud == "private") &&
			typeof value.name == "string" &&
			typeof value.url == "string" &&
			CardConfiguration.is(value)
		)
	}
	export function flaw(value: any | Key): gracely.Flaw {
		return {
			type: "model.Merchant.V1.Key",
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
							...(CardConfiguration.flaw(value).flaws || []),
					  ].filter(gracely.Flaw.is) as gracely.Flaw[]),
		}
	}
}
