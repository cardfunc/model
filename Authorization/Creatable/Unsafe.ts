import * as isoly from "isoly"
import * as authly from "authly"
import { Card } from "../../Card"
import { Base as CBase } from "./Base"
import { verify as verifyToken } from "../../verify"

export interface Unsafe extends CBase {
	card?: Card.Creatable
}

export namespace Unsafe {
	export function is(value: Unsafe | any): value is Unsafe {
		return typeof(value) == "object" &&
			(value.number == undefined || typeof(value.number) == "string") &&
			(value.descriptor == undefined || typeof(value.descriptor) == "string") &&
			(value.ip == undefined || typeof(value.ip) == "string") && (
				typeof(value.amount) == "number" &&
				isoly.Currency.is(value.currency) &&
				(
					Card.Creatable.is(value.card) &&
					(value.account == "create" || value.account == undefined) ||
					authly.Token.is(value.account)
				) ||
				value.account == "create" && value.amount == undefined && value.currency == undefined && Card.Creatable.is(value.card)
			)
	}
	export async function verify(token: authly.Token): Promise<Unsafe | undefined> {
		const result = await verifyToken(token)
		return is(result) ? result : undefined
	}
}
