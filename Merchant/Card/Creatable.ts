import * as authly from "authly"
import * as gracely from "gracely"
import * as isoly from "isoly"
import { Acquirer } from "../../Acquirer"
import { CategoryCode } from "./../CategoryCode"
import { Emv3d } from "./../Emv3d"

export interface Creatable {
	descriptor?: string
	country?: isoly.CountryCode.Alpha2
	acquirer?: Acquirer
	mid?: string
	mcc?: CategoryCode
	emv3d?: Emv3d
	url?: string
	id?: string
}
export namespace Creatable {
	export function is(value: Creatable | any): value is Creatable {
		return (
			typeof value == "object" &&
			(value.descriptor == undefined || typeof value.descriptor == "string") &&
			(value.country == undefined || isoly.CountryCode.Alpha2.is(value.country)) &&
			(value.acquirer == undefined || Acquirer.is(value.acquirer)) &&
			(value.mid == undefined || typeof value.mid == "string") &&
			(value.mcc == undefined || CategoryCode.is(value.mcc)) &&
			(value.emv3d == undefined || Emv3d.is(value.emv3d)) &&
			(value.url == undefined || typeof value.url == "string") &&
			(value.id == undefined || authly.Identifier.is(value.id))
		)
	}
	export function flaw(value: any | Creatable): gracely.Flaw {
		return {
			type: "model.Merchant.Card.Creatable",
			flaws:
				typeof value != "object"
					? undefined
					: ([
							value.descriptor == undefined ||
								typeof value.descriptor == "string" || { property: "descriptor", type: "string | undefined" },
							value.country == undefined ||
								isoly.CountryCode.Alpha2.is(value.country) || {
									property: "country",
									type: "isoly.CountryCode | undefined",
								},
							value.acquirer == undefined ||
								Acquirer.is(value.acquirer) || { property: "acquirer", type: "model.Acquirer | undefined" },
							value.mid == undefined || typeof value.mid == "string" || { property: "mid", type: "string | undefined" },
							value.mcc == undefined ||
								CategoryCode.is(value.mcc) || { property: "mcc", type: "model.Merchant.CategoryCode | undefined" },
							value.emv3d == undefined || Emv3d.is(value.emv3d) || { property: "emv3d", ...Emv3d.flaw(value.emv3d) },
							value.url == undefined || typeof value.url == "string" || { property: "url", type: "string | undefined" },
							value.id == undefined ||
								authly.Identifier.is(value.id) || { property: "id", type: "authly.Identifier | undefined" },
					  ].filter(gracely.Flaw.is) as gracely.Flaw[]),
		}
	}
}
