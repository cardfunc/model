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
	order: string,
	reference: string
	description: string
	timeout: number
	load3d?: string
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
			typeof(payment.order) == "string" &&
			typeof(payment.reference) == "string" &&
			typeof(payment.description) == "string" &&
			typeof(payment.timeout) == "number" &&
			(typeof(payment.load3d) == "string" || payment.load3d == undefined)
	}
	export function isCreatable(payment: Payment | any): payment is Payment {
		return typeof(payment) == "object" &&
			payment.id == undefined &&
			payment.created == undefined &&
			payment.psp == undefined &&
			payment.merchant == undefined &&
			Method.is(payment.method) &&
			payment.session == undefined &&
			(payment.account == undefined || typeof(payment.account) == "number") &&
			Currency.is(payment.currency) &&
			typeof(payment.amount) == "number" &&
			(typeof(payment.order) == "string" || payment.order == undefined) &&
			(typeof(payment.reference) == "string" || payment.reference == undefined) &&
			(typeof(payment.description) == "string" || payment.description == undefined) &&
			(typeof(payment.timeout) == "number" || payment.timeout == undefined)
	}
}
