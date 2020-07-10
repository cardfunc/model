import * as isoly from "isoly"
import * as gracely from "gracely"
import { CategoryCode } from "../../CategoryCode"

export interface KeyInfo {
	descriptor?: string
	country: isoly.CountryCode.Alpha2
	acquirer: string
	mid?: string,
	mcc?: CategoryCode,
	emv3d?: string,
}
export namespace KeyInfo {
	export function is(value: KeyInfo | any): value is KeyInfo {
		return typeof value == "object" &&
			(value.descriptor == undefined || typeof value.descriptor == "string") &&
			isoly.CountryCode.Alpha2.is(value.country) &&
			typeof value.acquirer == "string" &&
			(value.mid == undefined || typeof value.mid == "string") &&
			(value.mcc == undefined || CategoryCode.is(value.mcc)) &&
			(value.emv3d == undefined || typeof value.emv3d == "string")
	}
	export function flaw(value: any | KeyInfo): gracely.Flaw {
		return {
			type: "model.Merchant.Configuration.Card.KeyInfo",
			flaws: typeof value != "object" ? undefined :
				[
					(value.descriptor == undefined || typeof value.descriptor  == "string") || { property: "descriptor", type: "string" },
					isoly.CountryCode.Alpha2.is(value.country) || { property: "country", type: "isoly.CountryCode" },
					typeof value.acquirer == "string" || { property: "acquirer", type: "encrypted model.Acquirer.Settings as string" },
					value.mid == undefined || typeof value.mid == "string" || { property: "mid", type: "string" },
					value.mcc == undefined || CategoryCode.is(value.mcc) || { property: "mcc", type: "model.Merchant.CategoryCode" },
					value.emv3d == undefined || typeof value.emv3d == "string" || { property: "emv3d", type: "encrypted model.Merchant.Emv3d as string" },
				].filter(gracely.Flaw.is) as gracely.Flaw[],
		}
	}
}
