import * as isoly from "isoly"
import * as authly from "authly"
import { Card } from "../Card"
import { Creatable as CaptureCreatable } from "./Creatable"

export interface Capture extends CaptureCreatable {
	id: authly.Identifier
	descriptor?: string
	created: isoly.DateTime
	amount?: number
	currency?: isoly.Currency
	card: Card
}

export namespace Capture {
	export function is(value: Capture | any): value is Capture {
		return typeof(value) == "object" &&
			authly.Identifier.is(value.id) &&
			(value.number == undefined || typeof(value.number) == "string") &&
			(value.descriptor == undefined || typeof(value.descriptor) == "string") &&
			(value.ip == undefined || typeof(value.ip) == "string") &&
			isoly.DateTime.is(value.created) &&
			(
				typeof(value.amount) == "number" && isoly.Currency.is(value.currency) ||
				value.amount == undefined && value.currency == undefined
			) &&
			Card.is(value.card)
	}
	export type Creatable = CaptureCreatable
	export namespace Creatable {
		// tslint:disable-next-line: no-shadowed-variable
		export const is = CaptureCreatable.is
	}
}
