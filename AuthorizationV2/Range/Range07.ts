import { Range06 } from "./Range06"

export type Range07 = Range06 | "07"

export namespace Range07 {
	export function is(value: Range07 | any): value is Range07 {
		return Range06.is(value) || value == "07"
	}
}
