import { Creatable } from "./Creatable"
import { Expires } from "./Expires"

export type Change = Partial<Creatable>

export namespace Change {
	export function is(value: Change | any): value is Change {
		return typeof(value) == "object" &&
			(value.pan == undefined || typeof(value.pan) == "string") &&
			(value.expires == undefined || Expires.is(value.expires)) &&
			(value.csc == undefined || typeof(value.csc) == "string") &&
			(value.pares == undefined || typeof(value.pares) == "string")
	}
}
