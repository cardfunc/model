import * as isoly from "isoly"
import * as authly from "authly"
import { Card } from "../Card"
import { Creatable as CaptureCreatable } from "./Creatable"

export interface Capture extends CaptureCreatable {
	id: authly.Identifier
	reference: string
	descriptor?: string
	created: isoly.DateTime
	amount: number
}

export namespace Capture {
	export function is(value: Capture | any): value is Capture {
		return typeof(value) == "object" &&
			authly.Identifier.is(value.id) &&
			typeof(value.reference) == "string" &&
			(value.descriptor == undefined || typeof(value.descriptor) == "string") &&
			isoly.DateTime.is(value.created) &&
			typeof(value.amount) == "number"
	}
	export type Creatable = CaptureCreatable
	export namespace Creatable {
		export const is = CaptureCreatable.is
	}
}
