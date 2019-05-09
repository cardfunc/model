export type Month = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12

export namespace Month {
	export function is(value: Month | any): value is Month {
		return value == 1 || value == 2 || value == 3 || value == 4 ||
			value == 5 || value == 6 || value == 7 || value == 8 ||
			value == 9 || value == 10 || value == 11 || value == 12
	}
}
