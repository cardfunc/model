import { Creatable } from "./Creatable"

export interface Required extends Creatable {
	target: string
}

export namespace Required {
	export function is(value: Required | any): value is Required {
		return typeof value == "object" &&
			typeof value.target == "string" &&
			Creatable.is(value)
	}
}
