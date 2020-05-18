export type Range02 = "01" | "02"

export namespace Range02 {
	export function is(value: Range02 | any): value is Range02 {
		return value == "01" || value == "02"
	}
}
