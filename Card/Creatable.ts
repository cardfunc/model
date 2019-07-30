import { Pan } from "./Pan"
import { Expires } from "./Expires"

export interface Creatable {
	pan: Pan
	expires: Expires
	csc?: string
	pares?: string
}

export namespace Creatable {
	export function is(value: Creatable | any): value is Creatable {
		return typeof(value) == "object" &&
			typeof(value.pan) == "string" &&
			Expires.is(value.expires) &&
			(value.csc == undefined || typeof(value.csc) == "string") &&
			(value.pares == undefined || typeof(value.pares) == "string")
	}
}
