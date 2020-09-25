import * as isoly from "isoly"
import * as authly from "authly"
import { Creatable as RefundCreatable } from "./Creatable"

export interface Refund {
	id: authly.Identifier,
	reference: string,
	amount: number,
	descriptor?: string,
	created: isoly.DateTime,
}

export namespace Refund {
	export function is(value: Refund | any): value is Refund {
		return typeof value == "object" &&
				authly.Identifier.is(value.id) &&
				typeof value.amount == "number" &&
				(value.descriptor == undefined || typeof value.descriptor == "string") &&
				isoly.DateTime.is(value.created)
	}

	export type Creatable = RefundCreatable
	export namespace Creatable {
		export const is = RefundCreatable.is
	}
}
