import { Details as CardDetails } from "./Details"
import { Expires as CardExpires } from "./Expires"

// tslint:disable: no-shadowed-variable
export namespace Card {
	export type Details = CardDetails
	export namespace Details {
		export const is = CardDetails.is
	}
	export type Expires = CardExpires
	export namespace Expires {
		export const is = CardExpires.is
		export type Month = CardExpires.Month
		export namespace Month {
			export const is = CardExpires.Month.is
		}
		export type Year = CardExpires.Year
		export namespace Year {
			export const is = CardExpires.Year.is
		}
	}
}
