import { Month as ExpiresMonth } from "./Month"
import { Year as ExpiresYear } from "./Year"

export type Expires = [ExpiresMonth, ExpiresYear]

export namespace Expires {
	export function is(value: Expires | any): value is Expires {
		return Array.isArray(value) && value.length == 2 && ExpiresMonth.is(value[0]) && ExpiresYear.is(value[1])
	}
	export type Month = ExpiresMonth
	export namespace Month {
		export const is = ExpiresMonth.is
	}
	export type Year = ExpiresYear
	export namespace Year {
		export const is = ExpiresYear.is
	}
}
