import * as isoly from "isoly"
import * as authly from "authly"
import { Base as CBase } from "../Base"
import { Card as CCard } from "./Card"

export interface Safe extends CBase {
	card?: authly.Token
}

export namespace Safe {
	// tslint:disable-next-line: no-shadowed-variable
	export function is(value: Safe | any): value is Safe {
		return typeof value == "object" &&
			(value.number == undefined || typeof value.number == "string") &&
			(value.descriptor == undefined || typeof value.descriptor == "string") &&
			(value.ip == undefined || typeof value.ip == "string") && (
				typeof value.amount == "number" &&
				isoly.Currency.is(value.currency) &&
				(value.account == "create" || value.account == undefined || authly.Token.is(value.account)) ||
				value.account == "create" && value.amount == undefined && value.currency == undefined &&
				value.card == undefined
			) &&
			(value.card == undefined || authly.Token.is(value.card)) &&
			(value.pares == undefined || typeof value.pares == "string") &&
			(value.callback == undefined || typeof(value.callback) == "string")
	}
	export type Card = CCard
	export namespace Card {
		// tslint:disable-next-line: no-shadowed-variable
		export const is = CCard.is
		export const verify = CCard.verify
	}
}
