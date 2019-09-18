import * as isoly from "isoly"
import * as authly from "authly"
import { Creatable as RefundCreatable } from "./Creatable"

export interface Refund {
	id: authly.Identifier,
	amount: number,
	descriptor?: string,
	created: isoly.DateTime,
}

export namespace Refund {
	export function is(value: Refund | any): value is Refund {
		return value.amount == undefined || typeof value.amount == "number"
	}
	export type Creatable = RefundCreatable
	export namespace Creatable {
		// tslint:disable-next-line: no-shadowed-variable
		export const is = RefundCreatable.is
	}
}
