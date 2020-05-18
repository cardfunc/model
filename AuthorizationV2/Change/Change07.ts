import * as isoly from "isoly"
import { Range07 } from "../Range/Range07"

export interface Change07 {
	date: isoly.DateTime
	indicator: Range07
}

export namespace Change07 {
	export function is(value: Change07 | any): value is Change07 {
		return typeof value == "object" &&
			isoly.DateTime.is(value.date) &&
			Range07.is(value.indicator)
	}
}
