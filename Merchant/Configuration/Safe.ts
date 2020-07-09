import * as gracely from "gracely"
import { Safe as CCardSafe } from "./Card/Safe"
import { Override as COverride } from "./Override"

export type Safe = CCardSafe & COverride

export namespace Safe {
	export function is(value: Safe | any): value is Safe {
		return typeof value == "object" &&
			CCardSafe.is(value) &&
			COverride.is(value)
	}
	export function flaw(value: any | Safe): gracely.Flaw {
		return {
			type: "model.Merchant.Configuration.Safe",
			flaws: typeof value != "object" ? undefined :
				[
					...(CCardSafe.flaw(value).flaws ?? []),
					...(COverride.flaw(value).flaws ?? []),
				].filter(gracely.Flaw.is) as gracely.Flaw[],
		}
	}
}
