import * as isoly from "isoly"
import * as authly from "authly"
import { Card } from "../Card"

export interface Creatable {
	number?: string
	descriptor?: string
	ip?: string
	amount?: number
	currency?: isoly.Currency
	card?: Card.Creatable
	account?: "create" | authly.Identifier
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
	export type Safe = Omit<Creatable, "card">
	export namespace Safe {
		// tslint:disable-next-line: no-shadowed-variable
		export function is(value: Safe | any): value is Safe {
			return typeof(value) == "object" &&
				(value.number == undefined || typeof(value.number) == "string") &&
				(value.descriptor == undefined || typeof(value.descriptor) == "string") &&
				(value.ip == undefined || typeof(value.ip) == "string") && (
					typeof(value.amount) == "number" &&
					isoly.Currency.is(value.currency) &&
					(
						value.account == "create" || value.account == undefined || authly.Identifier.is(value.account)
					) ||
					value.account == "create" && value.amount == undefined && value.currency == undefined
				)
		}
	}
}
