import * as gracely from "gracely"
import { Creatable } from "./Creatable"
import { Expires } from "./Expires"
import { Pan } from "./Pan"

export type Change = Partial<Creatable>

export namespace Change {
	export function is(value: Change | any): value is Change {
		return (
			typeof value == "object" &&
			(value.pan == undefined || Pan.is(value.pan)) &&
			(value.expires == undefined || Expires.is(value.expires)) &&
			(value.csc == undefined || typeof value.csc == "string") &&
			(value.verification == undefined ||
				(typeof value.verification == "object" &&
					(value.verification.type == "pares" ||
						value.verification.type == "method" ||
						value.verification.type == "challenge") &&
					(value.verification.data == undefined ||
						typeof value.verification.data == "string" ||
						(typeof value.verification.data == "object" &&
							Object.values(value.verification.data).every(item => typeof item == "string"))))) &&
			(value.client == undefined ||
				(typeof value.client == "object" && (value.client.ip == undefined || typeof value.client.ip == "string")))
		)
	}
	export function flaw(value: Change | any): gracely.Flaw {
		return {
			type: "model.Card.Change",
			flaws:
				typeof value != "object"
					? undefined
					: ([
							value.pan == undefined || Pan.is(value.pan) || { property: "pan", type: "string | undefined" },
							value.expires == undefined ||
								Expires.is(value.expires) || { property: "expires", type: "string | undefined" },
							value.csc == undefined || typeof value.csc == "string" || { property: "csc", type: "string | undefined" },
							value.verification == undefined ||
								(typeof value.verification == "object" &&
									(value.verification.type == "pares" ||
										value.verification.type == "method" ||
										value.verification.type == "challenge") &&
									(value.verification.data == undefined ||
										typeof value.verification.data == "string" ||
										(typeof value.verification.data == "object" &&
											Object.values(value.verification.data).every(item => typeof item == "string")))) || {
									property: "verification",
									type:
										'{ type: "pares" | "method" | "challenge", data?: string | { [property: string]: string }} | undefined',
								},
							value.client == undefined ||
								(typeof value.client == "object" &&
									(value.client.ip == undefined || typeof value.client.ip == "string")) || {
									property: "client",
									type: "{ ip: string | undefined }",
								},
					  ].filter(gracely.Flaw.is) as gracely.Flaw[]),
		}
	}
}
