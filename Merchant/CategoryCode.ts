export type CategoryCode = string

export namespace CategoryCode {
	export function is(value: CategoryCode | any): value is CategoryCode {
		return typeof(value) == "string" &&
			value.length == 4 &&
			Array.from(value).every(c => c >= "0" && c <= "9")
	}
}
