import * as isoly from "isoly"
import * as authly from "authly"

export interface Safe {
	number?: string
	descriptor?: string
	ip?: string
	amount?: number
	currency?: isoly.Currency
	account?: "create" | authly.Identifier
	pares?: string
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
				(value.account == "create" || value.account == undefined || authly.Identifier.is(value.account)) ||
				value.account == "create" && value.amount == undefined && value.currency == undefined &&
				value.card == undefined
			) &&
			(value.pares == undefined || typeof value.pares == "string")
	}
}
