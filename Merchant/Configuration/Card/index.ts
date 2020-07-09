import * as isoly from "isoly"
import * as gracely from "gracely"
import { Acquirer } from "../../../Acquirer"
import { CategoryCode } from "../../CategoryCode"
import { Emv3d } from "../../Emv3d"
import { Safe as CSafe } from "./Safe"

export interface Card {
	descriptor?: string
	country: isoly.CountryCode.Alpha2
	acquirer: Acquirer
	mid?: string,
	mcc?: CategoryCode,
	emv3d?: Emv3d,
}
export namespace Card {
	export function is(value: Card | any): value is Card {
		return typeof value == "object" &&
			(value.descriptor == undefined || typeof value.descriptor == "string") &&
			isoly.CountryCode.Alpha2.is(value.country) &&
			Acquirer.is(value.acquirer) &&
			(value.mid == undefined || typeof value.mid == "string") &&
			(value.mcc == undefined || CategoryCode.is(value.mcc)) &&
			(value.emv3d == undefined || Emv3d.is(value.emv3d))
	}
	export function flaw(value: any | Card): gracely.Flaw {
		return {
			type: "model.Merchant.Configuration.Card",
			flaws: typeof value != "object" ? undefined :
				[
					(value.descriptor == undefined || typeof value.descriptor  == "string") || { property: "descriptor", type: "string" },
					isoly.CountryCode.Alpha2.is(value.country) || { property: "country", type: "isoly.CountryCode" },
					Acquirer.is(value.acquirer) || { property: "acquirer", type: "model.Acquirer.Settings" },
					value.mid == undefined || typeof value.mid == "string" || { property: "mid", type: "string" },
					value.mcc == undefined || CategoryCode.is(value.mcc) || { property: "mcc", type: "model.Merchant.CategoryCode" },
					value.emv3d == undefined || Emv3d.is(value.emv3d) || { property: "emv3d", ...Emv3d.flaw(value.emv3d) },
				].filter(gracely.Flaw.is) as gracely.Flaw[],
		}
	}
	// tslint:disable: no-shadowed-variable
	export type Safe = CSafe
	export namespace Safe {
		export const is = CSafe.is
		export const flaw = CSafe.flaw
	}
}
