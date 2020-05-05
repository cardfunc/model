import * as isoly from "isoly"
import * as gracely from "gracely"
import { Acquirer } from "../Acquirer"
import { CategoryCode } from "./CategoryCode"
import { Emv3d } from "./Emv3d"

export interface Creatable {
	name: string
	url: string
	descriptor?: string
	country: isoly.CountryCode.Alpha2
	acquirer: Acquirer
	mid?: string,
	mcc?: CategoryCode,
	emv3d?: Emv3d,
}

// tslint:disable-next-line:no-namespace
export namespace Creatable {
	export function is(value: any | Creatable): value is Creatable {
		return typeof value == "object" &&
			typeof value.name == "string" &&
			typeof value.url == "string" &&
			(value.descriptor == undefined || typeof value.descriptor == "string") &&
			isoly.CountryCode.Alpha2.is(value.country) &&
			Acquirer.is(value.acquirer) &&
			(value.mid == undefined || typeof value.mid == "string") &&
			(value.mcc == undefined || CategoryCode.is(value.mcc)) &&
			(value.emv3d == undefined || Emv3d.is(value.emv3d))
	}
	export function flaw(value: any | Creatable): gracely.Flaw {
		return {
			type: "model.Merchant.Creatable",
			flaws: typeof(value) != "object" ? undefined :
				[
					typeof(value.name) == "string" || { property: "name", type: "string" },
					typeof(value.url) == "string" || { property: "url", type: "string" },
					(value.descriptor == undefined || typeof value.descriptor  == "string") || { property: "descriptor", type: "string" },
					isoly.CountryCode.Alpha2.is(value.country) || { property: "country", type: "isoly.CountryCode" },
					Acquirer.is(value.acquirer) || { property: "acquirer", type: "model.Acquirer.Settings" },
					value.mid == undefined || typeof value.mid == "string" || { property: "mid", type: "string" },
					value.mcc == undefined || CategoryCode.is(value.mcc) || { property: "mcc", type: "model.Merchant.CategoryCode" },
					value.emv3d == undefined || Emv3d.is(value.emv3d) || Emv3d.flaw(value.emv3d),
				].filter(gracely.Flaw.is) as gracely.Flaw[],
		}
	}
}
