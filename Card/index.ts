import * as isoly from "isoly"
import * as authly from "authly"
import { Creatable as CardCreatable } from "./Creatable"
import { Pan as CardPan } from "./Pan"
import { Scheme as CardScheme } from "./Scheme"
import { Expires as CardExpires } from "./Expires"
import { Type as CardType } from "./Type"

export interface Card {
	id: authly.Identifier
	scheme: CardScheme
	last4: string
	country: isoly.CountryCode.Alpha2
	type: CardType
}

// tslint:disable: no-shadowed-variable
export namespace Card {
	export function is(value: Card | any): value is Card {
		return typeof(value) == "object" &&
			authly.Identifier.is(value.id) &&
			CardScheme.is(value.scheme) &&
			typeof(value.last4) == "string" && value.last4.length == 4 &&
			CardType.is(value.type)
	}
	export type Creatable = CardCreatable
	export namespace Creatable {
		export const is = CardCreatable.is
	}
	export type Pan = CardPan
	export namespace Pan {
		export const is = CardPan.is
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
}
