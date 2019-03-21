import { DateTime, Currency, Language } from "@certitrade/ct3-model"
import { Method } from "./Method"

export interface Payment {
	id: number
	created: DateTime
	psp: number
	merchant: number
	method: Method
	account?: number
	amount: number
	currency: Currency
	language: Language
	order: string,
	reference: string
	description: string
	timeout?: number
}

export namespace Payment {
	export function is(payment: Payment | any): payment is Payment {
		return typeof(payment) == "object" &&
			typeof(payment.id) == "number" &&
			DateTime.is(payment.created) &&
			typeof(payment.psp) == "number" &&
			typeof(payment.merchant) == "number" &&
			Method.is(payment.method) &&
			(payment.account == undefined || typeof(payment.account) == "number") &&
			typeof(payment.amount) == "number" &&
			Currency.is(payment.currency) &&
			Language.is(payment.language) &&
			typeof(payment.order) == "string" &&
			typeof(payment.reference) == "string" &&
			typeof(payment.description) == "string" &&
			typeof(payment.timeout) == "number"
	}
}
