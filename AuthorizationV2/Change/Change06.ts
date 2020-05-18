import * as isoly from "isoly"
import { Range06 } from "../Range/Range06"

export interface Change06 {
	date: isoly.DateTime
	indicator: Range06
}

export namespace Change06 {
	export function is(value: Change06 | any): value is Change06 {
		return typeof value == "object" &&
			isoly.DateTime.is(value.date) &&
			Range06.is(value.indicator)
	}
}
