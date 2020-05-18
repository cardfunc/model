import * as isoly from "isoly"
import { Range02 } from "../Range/Range02"

export interface Change02 {
	date: isoly.DateTime
	indicator: Range02
}

export namespace Change02 {
	export function is(value: Change02 | any): value is Change02 {
		return typeof value == "object" &&
			isoly.DateTime.is(value.date) &&
			Range02.is(value.indicator)
	}
}
