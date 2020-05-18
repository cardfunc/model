import * as isoly from "isoly"
import { Range03 } from "../Range/Range03"

export interface Change03 {
	date: isoly.DateTime
	indicator: Range03
}

export namespace Change03 {
	export function is(value: Change03 | any): value is Change03 {
		return typeof value == "object" &&
			isoly.DateTime.is(value.date) &&
			Range03.is(value.indicator)
	}
}
