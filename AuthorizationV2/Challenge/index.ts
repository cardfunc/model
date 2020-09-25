import { Creatable as CCreatable } from "./Creatable"
import { Required as CRequired } from "./Required"

export interface Challenge extends CCreatable {
	target?: string
}

export namespace Challenge {
	export function is(value: Challenge | any): value is Challenge {
		return (
			typeof value == "object" && (value.target == undefined || typeof value.target == "string") && CCreatable.is(value)
		)
	}
	export type Required = CRequired
	export namespace Required {
		export const is = CRequired.is
	}
	export type Creatable = CCreatable
	export namespace Creatable {
		export const is = CCreatable.is
	}
}
