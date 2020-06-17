import * as isoly from "isoly"
import * as gracely from "gracely"
import { Acquirer } from "../Acquirer"
import { CategoryCode } from "./CategoryCode"
import { Emv3d } from "./Emv3d"

export interface Configuration {
	descriptor?: string
	country: isoly.CountryCode.Alpha2
	acquirer: Acquirer
	mid?: string,
	mcc?: CategoryCode,
	emv3d?: Emv3d,
}
export namespace Configuration {
	export function is(value: Configuration | any): value is Configuration {
		return typeof value == "object" &&
			(value.descriptor == undefined || typeof value.descriptor == "string") &&
			isoly.CountryCode.Alpha2.is(value.country) &&
			Acquirer.is(value.acquirer) &&
			(value.mid == undefined || typeof value.mid == "string") &&
			(value.mcc == undefined || CategoryCode.is(value.mcc)) &&
			(value.emv3d == undefined || Emv3d.is(value.emv3d))
	}
	export function flaw(value: any | Configuration): gracely.Flaw {
		return {
			type: "model.Merchant.Configuration",
			flaws: typeof(value) != "object" ? undefined :
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
}
