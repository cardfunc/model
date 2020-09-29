import * as isoly from "isoly"
import * as authly from "authly"

export interface Cancel {
	id: authly.Identifier
	descriptor?: string
	reference: string
	created: isoly.DateTime
}

export namespace Cancel {
	export function is(value: Cancel | any): value is Cancel {
		return (
			typeof value == "object" &&
			authly.Identifier.is(value.id) &&
			(value.descriptor == undefined || typeof value.descriptor == "string") &&
			typeof value.reference == "string" &&
			isoly.DateTime.is(value.created)
		)
	}
}
