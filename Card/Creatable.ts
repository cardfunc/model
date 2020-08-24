import { Pan } from "./Pan"
import { Expires } from "./Expires"

export interface Creatable {
	pan: Pan
	expires: Expires
	csc?: string
	pares?: string
	verification?: { type: "pares" | "method" | "challenge", data?: string | { [property: string]: string }}
}

export namespace Creatable {
	export function is(value: Creatable | any): value is Creatable {
		return typeof(value) == "object" &&
			typeof(value.pan) == "string" &&
			Expires.is(value.expires) &&
			(value.csc == undefined || typeof(value.csc) == "string") &&
			(value.pares == undefined || typeof(value.pares) == "string") &&
			(value.verification == undefined || typeof(value.verification) == "object" &&
				(
					value.verification.type == "pares" ||
					value.verification.type == "method" ||
					value.verification.type == "challenge"
				)
				&&
				(
					value.verification.data == undefined ||
					typeof value.verification.data == "string" ||
					typeof value.verification.data == "object" && Object.values(value.verification.data).every(item => typeof item == "string")
				)
			)
	}
}
