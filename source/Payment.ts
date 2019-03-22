import { DateTime, Currency, Language } from "@certitrade/ct3-model"
import { Method } from "./Method"

export interface Payment {
	id: number
	created: DateTime
	psp: number
	merchant: number
	method: Method
	session: string
	account?: number
	currency: Currency
	amount: number
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
			typeof(payment.session) == "string" &&
			(payment.account == undefined || typeof(payment.account) == "number") &&
			Currency.is(payment.currency) &&
			typeof(payment.amount) == "number" &&
			Language.is(payment.language) &&
			typeof(payment.order) == "string" &&
			typeof(payment.reference) == "string" &&
			typeof(payment.description) == "string" &&
			typeof(payment.timeout) == "number"
	}
}
