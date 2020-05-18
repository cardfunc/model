import { Range04 } from "./Range04"

export type Range05 = Range04 | "05"

export namespace Range05 {
	export function is(value: Range05 | any): value is Range05 {
		return Range04.is(value) || value == "05"
	}
}
