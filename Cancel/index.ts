import * as isoly from "isoly"
import * as authly from "authly"
import { Creatable as CancelCreatable } from "./Creatable"

export interface Cancel {
	id: authly.Identifier,
	descriptor?: string,
	created?: isoly.DateTime,
}

export namespace Cancel {

	export function is(value: Cancel | any): value is Cancel {
		return true
	}

	export function from(value: CancelCreatable): Omit<Cancel, "id"> {

		const capture = {
			descriptor: value.descriptor,
		}

		return capture
	}

	export type Creatable = CancelCreatable
	export namespace Creatable {
		// tslint:disable-next-line: no-shadowed-variable
		export const is = CancelCreatable.is
	}
}
