import * as isoly from "isoly"

export interface GiftCard {
	amount?: string
	count?: string
	currency?: isoly.Currency
}

export namespace GiftCard {
	export function is(value: GiftCard | any): value is GiftCard {
		return typeof value == "object" &&
			(value.amount == undefined || typeof value.amount == "string" && /^\d{0,15}$/.test(value.amount)) &&
			(value.count == undefined || typeof value.count == "string" && /^\d{2}$/.test(value.count)) &&
			(value.currency == undefined || isoly.Currency.is(value.currency))
	}
}
