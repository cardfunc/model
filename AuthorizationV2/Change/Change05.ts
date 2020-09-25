import * as isoly from "isoly"
import { Range05 } from "../Range/Range05"

export interface Change05 {
	date: isoly.DateTime
	indicator: Range05
}

export namespace Change05 {
	export function is(value: Change05 | any): value is Change05 {
		return typeof value == "object" && isoly.DateTime.is(value.date) && Range05.is(value.indicator)
	}
}
