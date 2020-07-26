import * as authly from "authly"
import { Change as CardChange } from "./Change"
import { Creatable as CardCreatable } from "./Creatable"
import { Pan as CardPan } from "./Pan"
import { Scheme as CardScheme } from "./Scheme"
import { Expires as CardExpires } from "./Expires"
import { Type as CardType } from "./Type"
import { Token as CardToken } from "./Token"

export interface Card {
	id: authly.Identifier
	reference?: string
	account?: authly.Token
	scheme: CardScheme
	iin: string
	last4: string
	expires: CardExpires
	type?: CardType
}

// tslint:disable: no-shadowed-variable
export namespace Card {
	export function is(value: Card | any): value is Card {
		return typeof value == "object" &&
			authly.Identifier.is(value.id) &&
			(value.reference == undefined || typeof value.reference == "string") &&
			(value.account == undefined || authly.Token.is(value.account)) &&
			CardScheme.is(value.scheme) &&
			typeof value.iin == "string" && value.iin.length == 6 &&
			typeof value.last4 == "string" && value.last4.length == 4 &&
			CardExpires.is(value.expires) &&
			(value.type == undefined || CardType.is(value.type))
	}
	export function from(value: CardCreatable): Omit<Card, "id" | "reference">
	export function from(value: Change): Omit<Partial<Card>, "id" | "reference">
	export function from(value: CardCreatable | Change): Omit<Card, "id" | "reference"> | Omit<Partial<Card>, "id" | "reference"> {
		let result: Omit<Card, "id" | "reference"> | Omit<Partial<Card>, "id" | "reference">
		if (CardCreatable.is(value))
			result = {
				scheme: CardPan.scheme(value.pan),
				iin: CardPan.iin(value.pan),
				last4: CardPan.last4(value.pan),
				expires: value.expires,
			}
		else {
			result = {}
			if (value.pan) {
				result = {
					...result,
					scheme: Pan.scheme(value.pan),
					iin: Pan.iin(value.pan),
					last4: Pan.last4(value.pan),
				}
			}
			if (value.expires)
				result = { ...result, expires: value.expires }
		}
		return result
	}
	export function generateId(): authly.Identifier {
		return authly.Identifier.generate(8)
	}
	export type Change = CardChange
	export namespace Change {
		export const is = CardChange.is
	}
	export type Creatable = CardCreatable
	export namespace Creatable {
		export const is = CardCreatable.is
	}
	export type Pan = CardPan
	export namespace Pan {
		export const is = CardPan.is
		export const scheme = CardPan.scheme
		export const valid = CardPan.valid
		export const iin = CardPan.iin
		export const last4 = CardPan.last4
	}
	export type Scheme = CardScheme
	export namespace Scheme {
		export const is = CardScheme.is
	}
	export type Expires = CardExpires
	export namespace Expires {
		export const is = CardExpires.is
		export type Month = CardExpires.Month
		export namespace Month {
			export const is = CardExpires.Month.is
		}
		export type Year = CardExpires.Year
		export namespace Year {
			export const is = CardExpires.Year.is
		}
		export type Type = CardType
		export namespace Type {
			export const is = CardType.is
		}
	}
	export type Token = CardToken
	export namespace Token {
		export const is = CardToken.is
		export const hasInfo = CardToken.hasInfo
		export const verify = CardToken.verify
	}
}
