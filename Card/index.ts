import { Change as CardChange } from "./Change"
import { Creatable as CardCreatable } from "./Creatable"
import { Expires as CardExpires } from "./Expires"
import { Pan as CardPan } from "./Pan"
import { Scheme as CardScheme } from "./Scheme"
import { Token as CardToken } from "./Token"
import { Type as CardType } from "./Type"
import { Card as CardV1 } from "./V1"

export interface Card {
	scheme: CardScheme
	iin: string
	last4: string
	expires: CardExpires
	type?: CardType
}

export namespace Card {
	export function is(value: Card | any): value is Card {
		return (
			typeof value == "object" &&
			CardScheme.is(value.scheme) &&
			typeof value.iin == "string" &&
			value.iin.length == 6 &&
			typeof value.last4 == "string" &&
			value.last4.length == 4 &&
			CardExpires.is(value.expires) &&
			(value.type == undefined || CardType.is(value.type))
		)
	}
	export function from(value: CardCreatable): Card
	export function from(value: Change): Partial<Card>
	export function from(value: CardCreatable | Change): Card | Partial<Card> {
		let result: Card | Partial<Card>
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
	export type Change = CardChange
	export namespace Change {
		export const is = CardChange.is
		export const flaw = CardChange.flaw
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
		export const verify = CardToken.verify
	}
	export type V1 = CardV1
	export namespace V1 {
		export const is = CardV1.is
		export const from = CardV1.from
		export const generateId = CardV1.generateId
		export type Token = CardV1.Token
		export namespace Token {
			export const is = CardV1.Token.is
			export const verify = CardV1.Token.verify
			export const hasInfo = CardV1.Token.hasInfo
		}
	}
}
