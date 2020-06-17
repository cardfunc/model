import * as isoly from "isoly"
import * as gracely from "gracely"
import * as authly from "authly"
import { Acquirer } from "../../Acquirer"
import { CategoryCode } from "../CategoryCode"
import { Emv3d } from "../Emv3d"

export interface Key extends authly.Payload {
	sub: string
	iss: string
	aud: "public" | "private"
	iat: number
	name: string
	url: string
	descriptor?: string
	country: isoly.CountryCode.Alpha2
	acquirer: Acquirer
	mid?: string,
	mcc?: CategoryCode,
	emv3d?: Emv3d,
}

export namespace Key {
	export function is(value: Key | any): value is Key {
		return authly.Identifier.is((value as any).sub) &&
			typeof(value as any).iss == "string" &&
			typeof(value as any).iat == "number" &&
			((value as any).aud == "public" || (value as any).aud == "private") &&
			typeof value == "object" &&
			typeof value.name == "string" &&
			typeof value.url == "string" &&
			(value.descriptor == undefined || typeof value.descriptor == "string") &&
			isoly.CountryCode.Alpha2.is(value.country) &&
			Acquirer.is(value.acquirer) &&
			(value.mid == undefined || typeof value.mid == "string") &&
			(value.mcc == undefined || CategoryCode.is(value.mcc)) &&
			(value.emv3d == undefined || Emv3d.is(value.emv3d))
	}
	export function flaw(value: any | Key): gracely.Flaw {
		return {
			type: "model.Merchant.Key",
			flaws: typeof(value) != "object" ? undefined :
				[
					typeof value.sub == "string" || { property: "sub", type: "authly.Identifier", condition: "Merchant identifier." },
					typeof value.iss == "string" || { property: "iss", type: "string", condition: "Key issuer." },
					typeof value.aud == "string" || { property: "aud", type: `"public" | "private"`, condition: "Key audience." },
					typeof value.iat == "number" || { property: "iat", type: "number", condition: "Issued timestamp." },
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
