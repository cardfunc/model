import { Range03 } from "./Range03"

export type Range04 = Range03 | "04"

export namespace Range04 {
	export function is(value: Range04 | any): value is Range04 {
		return Range03.is(value) || value == "04"
	}
}
