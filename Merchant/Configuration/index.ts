import * as gracely from "gracely"
import { Card as CCard } from "./Card"
import { Override as COverride } from "./Override"
import { Safe as CSafe } from "./Safe"

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
		export type Safe = CCard.Safe
		export namespace Safe {
			export const is = CCard.Safe.is
			export const flaw = CCard.Safe.flaw
		}
	}
	export type Override = COverride
	export namespace Override {
		export const is = COverride.is
		export const flaw = COverride.flaw
	}
	export type Safe = CSafe
	export namespace Safe {
		export const is = CSafe.is
		export const flaw = CSafe.flaw
	}
}
