import { Expires } from "./Expires"
import { Pan } from "./Pan"

export interface Creatable {
	pan: Pan
	expires: Expires
	csc?: string
	verification?: { type: "pares" | "method" | "challenge"; data?: string | { [property: string]: any } }
	client?: { ip?: string }
}

export namespace Creatable {
	export function is(value: Creatable | any): value is Creatable {
		return (
			typeof value == "object" &&
			Pan.is(value.pan) &&
			Expires.is(value.expires) &&
			(value.csc == undefined || typeof value.csc == "string") &&
			(value.verification == undefined ||
				(typeof value.verification == "object" &&
					(value.verification.type == "pares" ||
						value.verification.type == "method" ||
						value.verification.type == "challenge") &&
					(value.verification.data == undefined ||
						typeof value.verification.data == "string" ||
						typeof value.verification.data == "object"))) &&
			(value.client == undefined ||
				(typeof value.client == "object" && (value.client.ip == undefined || typeof value.client.ip == "string")))
		)
	}
}
