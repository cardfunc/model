import * as isoly from "isoly"
import * as authly from "authly"
import { Cancel } from "../Cancel"
import { Capture } from "../Capture"
import { Card } from "../Card"
import { Creatable as AuthorizationCreatable } from "./Creatable"
import { Refund } from "../Refund"
import { verify as verifyToken } from "../verify"

export interface Authorization {
	id: authly.Identifier
	number?: string
	reference: string
	descriptor?: string
	ip?: string
	created: isoly.DateTime
	amount?: number
	currency?: isoly.Currency
	card: Card
	capture: Capture[],
	refund: Refund[],
	cancel?: Cancel,
	callback?: string,
}

export namespace Authorization {
	export function is(value: Authorization | any): value is Authorization {
		return typeof(value) == "object" &&
			authly.Identifier.is(value.id) &&
			(value.number == undefined || typeof(value.number) == "string") &&
			typeof(value.reference) == "string" &&
			(value.descriptor == undefined || typeof(value.descriptor) == "string") &&
			(value.ip == undefined || typeof(value.ip) == "string") &&
			isoly.DateTime.is(value.created) &&
			(
				typeof(value.amount) == "number" && isoly.Currency.is(value.currency) ||
				value.amount == undefined && value.currency == undefined
			) &&
			Card.is(value.card) &&
			Array.isArray(value.capture) && value.capture.every(Capture.is) &&
			Array.isArray(value.refund) && value.refund.every(Refund.is) &&
			(value.cancel == undefined || Cancel.is(value.cancel)) &&
			(value.callback == undefined || typeof(value.callback) == "string")
	}
	export async function verify(token: authly.Token): Promise<Authorization | undefined> {
		const result = await verifyToken(token)
		return is(result) ? result : undefined
	}
	export type Creatable = AuthorizationCreatable
	export namespace Creatable {
		// tslint:disable: no-shadowed-variable
		export const is = AuthorizationCreatable.is
		export const verify = AuthorizationCreatable.verify
		export type Safe = AuthorizationCreatable.Safe
		export namespace Safe {
			export const is = AuthorizationCreatable.Safe.is
		}
	}
}
