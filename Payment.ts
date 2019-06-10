import { DateTime, Currency } from "isoly"
import { Method } from "./Method"
import { Status } from "./Status"

export interface Payment {
	id: number
	created: DateTime
	status: Status
	method: Method
	account?: number
	currency: Currency
	amount: number
	order: string
	reference: string
	verify?: { location: string, pareq: string }
}

export namespace Payment {
	export function is(payment: Payment | any): payment is Payment {
		return typeof(payment) == "object" &&
			typeof(payment.id) == "number" &&
			DateTime.is(payment.created) &&
			Status.is(payment.status) &&
			Method.is(payment.method) &&
			(payment.account == undefined || typeof(payment.account) == "number") &&
			Currency.is(payment.currency) &&
			typeof(payment.amount) == "number" &&
			typeof(payment.order) == "string" &&
			typeof(payment.reference) == "string" &&
			(typeof(payment.load3d) == "string" || payment.load3d == undefined) &&
			(payment.verify == undefined || typeof(payment.verify) == "object" && typeof(payment.verify.location) == "string" && typeof(payment.verify.pareq) == "string")
	}
	export function isCreatable(payment: Partial<Payment> | any): payment is Partial<Payment> {
		return typeof(payment) == "object" &&
			payment.id == undefined &&
			payment.created == undefined &&
			payment.status == undefined &&
			Method.is(payment.method) &&
			(payment.account == undefined || typeof(payment.account) == "number") &&
			Currency.is(payment.currency) &&
			typeof(payment.amount) == "number" &&
			(typeof(payment.order) == "string" || payment.order == undefined) &&
			(typeof(payment.reference) == "string" || payment.reference == undefined) &&
			payment.verify == undefined
		}
}
