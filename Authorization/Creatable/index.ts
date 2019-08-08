import * as isoly from "isoly"
import * as authly from "authly"
import { Card } from "../../Card"
import { Safe as CSafe } from "./Safe"

export interface Creatable extends CSafe {
	card?: Card.Creatable
}

export namespace Creatable {
	export function is(value: Creatable | any): value is Creatable {
		return typeof(value) == "object" &&
			(value.number == undefined || typeof(value.number) == "string") &&
			(value.descriptor == undefined || typeof(value.descriptor) == "string") &&
			(value.ip == undefined || typeof(value.ip) == "string") && (
				typeof(value.amount) == "number" &&
				isoly.Currency.is(value.currency) &&
				(
					Card.Creatable.is(value.card) &&
					(value.account == "create" || value.account == undefined) ||
					authly.Identifier.is(value.account)
				) ||
				value.account == "create" && value.amount == undefined && value.currency == undefined && Card.Creatable.is(value.card)
			)
	}
	export type Safe = CSafe
	export namespace Safe {
		// tslint:disable-next-line: no-shadowed-variable
		export const is = CSafe.is
	}
}
