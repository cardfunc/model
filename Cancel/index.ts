import * as isoly from "isoly"
import * as authly from "authly"
import { Creatable as CancelCreatable } from "./Creatable"

export interface Cancel {
	id: authly.Identifier,
	descriptor?: string,
	reference: string,
	created?: isoly.DateTime,
}

export namespace Cancel {
	export function is(value: Cancel | any): value is Cancel {
		return true
	}
	export type Creatable = CancelCreatable
	export namespace Creatable {
		// tslint:disable-next-line: no-shadowed-variable
		export const is = CancelCreatable.is
	}
}
