import * as authly from "authly"
import { Change } from "../Change"
import { Creatable } from "../Creatable"
import { Expires } from "../Expires"
import { Pan } from "../Pan"
import { Scheme } from "../Scheme"
import { Type } from "../Type"
import { Token as CardToken } from "./Token"

export interface Card {
	id: authly.Identifier
	reference?: string
	account?: authly.Token
	scheme: Scheme
	iin: string
	last4: string
	expires: Expires
	type?: Type
}

export namespace Card {
	export function is(value: Card | any): value is Card {
		return (
			typeof value == "object" &&
			authly.Identifier.is(value.id) &&
			(value.reference == undefined || typeof value.reference == "string") &&
			(value.account == undefined || authly.Token.is(value.account)) &&
			Scheme.is(value.scheme) &&
			typeof value.iin == "string" &&
			value.iin.length == 6 &&
			typeof value.last4 == "string" &&
			value.last4.length == 4 &&
			Expires.is(value.expires) &&
			(value.type == undefined || Type.is(value.type))
		)
	}
	export function from(value: Creatable): Omit<Card, "id" | "reference">
	export function from(value: Change): Omit<Partial<Card>, "id" | "reference">
	export function from(
		value: Creatable | Change
	): Omit<Card, "id" | "reference"> | Omit<Partial<Card>, "id" | "reference"> {
		let result: Omit<Card, "id" | "reference"> | Omit<Partial<Card>, "id" | "reference">
		if (Creatable.is(value))
			result = {
				scheme: Pan.scheme(value.pan),
				iin: Pan.iin(value.pan),
				last4: Pan.last4(value.pan),
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
	export type Token = CardToken
	export namespace Token {
		export const is = CardToken.is
		export const hasInfo = CardToken.hasInfo
		export const verify = CardToken.verify
	}
}
