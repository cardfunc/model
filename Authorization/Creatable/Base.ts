import * as isoly from "isoly"
import * as authly from "authly"

export interface Base {
	number?: string
	descriptor?: string
	ip?: string
	amount?: number
	currency?: isoly.Currency
	account?: "create" | authly.Token
	pares?: string
	callback?: string
}

export namespace Base {
	// tslint:disable-next-line: no-shadowed-variable
	export function is(value: Base | any): value is Base {
		return typeof value == "object" &&
			(value.number == undefined || typeof value.number == "string") &&
			(value.descriptor == undefined || typeof value.descriptor == "string") &&
			(value.ip == undefined || typeof value.ip == "string") && (
				typeof value.amount == "number" &&
				isoly.Currency.is(value.currency) &&
				(value.account == "create" || value.account == undefined || authly.Token.is(value.account)) ||
				value.account == "create" && value.amount == undefined && value.currency == undefined
			) &&
			(value.pares == undefined || typeof value.pares == "string") &&
			(value.callback == undefined || typeof(value.callback) == "string")
	}
}
