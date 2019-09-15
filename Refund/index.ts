import * as isoly from "isoly"
import * as authly from "authly"
import { Creatable as RefundCreatable } from "./Creatable"

export interface Refund {
	id: authly.Identifier,
	amount?: number,
	descriptor?: string,
	created?: isoly.DateTime,
}

export namespace Refund {

	export function is(value: Refund | any): value is Refund {

		if ("amount" in value && typeof(value.amount) != "number") {
			return false
		}

		return true
	}

	export function from(value: RefundCreatable): Omit<Refund, "id"> {

		const refund = {
			amount: value.amount,
			textOnStatment: value.descriptor,
		}

		return refund
	}

	export type Creatable = RefundCreatable
	export namespace Creatable {
		// tslint:disable-next-line: no-shadowed-variable
		export const is = RefundCreatable.is
	}
}
