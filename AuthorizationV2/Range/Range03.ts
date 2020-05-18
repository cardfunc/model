import { Range02 } from "./Range02"

export type Range03 = Range02 | "03"

export namespace Range03 {
	export function is(value: Range03 | any): value is Range03 {
		return Range02.is(value) || value == "03"
	}
}
