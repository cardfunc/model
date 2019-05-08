import { Expires } from "./Expires"

export interface Details {
	name?: string
	number: string
	csc?: string
	expires: Expires
}

export namespace Details {
	export function is(value: Details | any): value is Details {
		return typeof(value) == "object" &&
			(value.name == undefined || typeof(value.name) == "string") &&
			typeof(value.number) == "string" &&
			(value.csc == undefined || typeof(value.csc) == "string") &&
			Expires.is(value.expires)
	}
}
