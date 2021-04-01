import * as gracely from "gracely"
import * as model from "../index"

export interface Agent {
	sub: string
	iss: string
	iat: number
	aud: "agent"
	name: string
	url?: string
	card?: model.Merchant.Card.Creatable
}
export namespace Agent {
	export function is(value: any | Agent): value is Agent {
		return (
			typeof value == "object" &&
			typeof value.sub == "string" &&
			typeof value.iss == "string" &&
			value.aud == "agent" &&
			typeof value.iat == "number" &&
			typeof value.name == "string" &&
			(value.url == undefined || typeof value.url == "string") &&
			(value.card == undefined || model.Merchant.Card.Creatable.is(value.card))
		)
	}
	export function flaw(value: any | Agent): gracely.Flaw {
		return {
			type: "model.Merchant.Key.Agent",
			flaws:
				typeof value != "object"
					? undefined
					: ([
							typeof value.sub == "string" || {
								property: "sub",
								type: "string",
								condition: "Agent identifier.",
							},
							typeof value.iss == "string" || { property: "iss", type: "string", condition: "Key issuer." },
							value.aud == "agent" || {
								property: "aud",
								type: `"agent"`,
								condition: "Key audience.",
							},
							typeof value.iat == "number" || { property: "iat", type: "number", condition: "Issued timestamp." },
							typeof value.name == "string" || { property: "name", type: "string" },
							value.url == undefined || typeof value.url == "string" || { property: "url", type: "string | undefined" },
							...(value.card == undefined || model.Merchant.Card.Creatable.is(value.card)
								? []
								: [
										{
											property: "card",
											type: "model.Merchant.Card.Creatable",
											flaws: model.Merchant.Card.Creatable.flaw(value.card).flaws,
										},
								  ]),
					  ].filter(gracely.Flaw.is) as gracely.Flaw[]),
		}
	}
}
