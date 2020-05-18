import { Range05 } from "./Range05"

export type Range06 = Range05 | "06"

export namespace Range06 {
	export function is(value: Range06 | any): value is Range06 {
		return Range05.is(value) || value == "06"
	}
}
