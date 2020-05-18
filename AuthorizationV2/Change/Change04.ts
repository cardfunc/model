import * as isoly from "isoly"
import { Range04 } from "../Range/Range04"

export interface Change04 {
	date: isoly.DateTime
	indicator: Range04
}

export namespace Change04 {
	export function is(value: Change04 | any): value is Change04 {
		return typeof value == "object" &&
			isoly.DateTime.is(value.date) &&
			Range04.is(value.indicator)
	}
}
