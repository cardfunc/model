import * as gracely from "gracely"
import { Card as CCard } from "./Card"
import { Override as COverride } from "./Override"

export type Configuration = CCard & COverride

export namespace Configuration {
	export function is(value: Configuration | any): value is Configuration {
		return typeof value == "object" &&
			CCard.is(value) &&
			COverride.is(value)
	}
	export function flaw(value: any | Configuration): gracely.Flaw {
		return {
			type: "model.Merchant.Configuration",
			flaws: typeof value != "object" ? undefined :
				[
					...(CCard.flaw(value).flaws ?? []),
					...(COverride.flaw(value).flaws ?? []),
				].filter(gracely.Flaw.is) as gracely.Flaw[],
		}
	}
	// tslint:disable: no-shadowed-variable
	export type Card = CCard
	export namespace Card {
		export const is = CCard.is
		export const flaw = CCard.flaw
	}
	export type Override = COverride
	export namespace Override {
		export const is = COverride.is
		export const flaw = COverride.flaw
	}
}
