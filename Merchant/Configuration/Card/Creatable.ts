import * as isoly from "isoly"
import * as gracely from "gracely"
import { Creatable as CreatableAcquirer } from "../../../Acquirer/Creatable"
import { CategoryCode } from "../../CategoryCode"
import { Emv3d } from "../../Emv3d"

export interface Creatable {
	descriptor?: string
	country?: isoly.CountryCode.Alpha2
	acquirer?: CreatableAcquirer
	mid?: string
	mcc?: CategoryCode
	emv3d?: Emv3d
}
export namespace Creatable {
	export function is(value: Creatable | any): value is Creatable {
		return (
			typeof value == "object" &&
			(value.descriptor == undefined || typeof value.descriptor == "string") &&
			(value.country == undefined || isoly.CountryCode.Alpha2.is(value.country)) &&
			(value.acquirer == undefined || CreatableAcquirer.is(value.acquirer)) &&
			(value.mid == undefined || typeof value.mid == "string") &&
			(value.mcc == undefined || CategoryCode.is(value.mcc)) &&
			(value.emv3d == undefined || Emv3d.is(value.emv3d))
		)
	}
	export function flaw(value: any | Creatable): gracely.Flaw {
		return {
			type: "model.Merchant.Configuration.Creatable",
			flaws:
				typeof value != "object"
					? undefined
					: ([
							value.descriptor == undefined ||
								typeof value.descriptor == "string" || { property: "descriptor", type: "string" },
							value.country == undefined ||
								isoly.CountryCode.Alpha2.is(value.country) || { property: "country", type: "isoly.CountryCode" },
							value.acquirer == undefined ||
								CreatableAcquirer.is(value.acquirer) || { property: "acquirer", type: "model.Acquirer.Creatable" },
							value.mid == undefined || typeof value.mid == "string" || { property: "mid", type: "string" },
							value.mcc == undefined ||
								CategoryCode.is(value.mcc) || { property: "mcc", type: "model.Merchant.CategoryCode" },
							value.emv3d == undefined || Emv3d.is(value.emv3d) || { property: "emv3d", ...Emv3d.flaw(value.emv3d) },
					  ].filter(gracely.Flaw.is) as gracely.Flaw[]),
		}
	}
}
