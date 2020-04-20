import * as isoly from "isoly"
import * as authly from "authly"
import { Card } from "../../Card"
import { Base as CBase } from "./Base"

export interface Unsafe extends CBase {
	card?: Card.Creatable
}

export namespace Unsafe {
	export function is(value: Unsafe | any): value is Unsafe {
		return typeof(value) == "object" &&
		(
			typeof(value.amount) == "number" && isoly.Currency.is(value.currency) &&
			(
				Card.Creatable.is(value.card) && (value.account == "create" || value.account == undefined) ||
				authly.Token.is(value.account)
			) ||
			value.amount == undefined && value.currency == undefined && Card.Creatable.is(value.card) && value.account == "create"
		) && CBase.is(value)
	}
}
