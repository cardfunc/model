import * as isoly from "isoly"
import * as gracely from "gracely"
import * as authly from "authly"
import * as MerchantV1 from "./V1"
import { Configuration } from "./Configuration"

export interface Merchant {
	id: authly.Identifier
	name: string
	card: Configuration
}

// tslint:disable: no-shadowed-variable
export namespace Merchant {
	export function is(value: any | Merchant): value is Merchant {
		return typeof value == "object" &&
			authly.Identifier.is((value as any).id) &&
			typeof value.name == "string" &&
			Configuration.is(value.card)
	}
	export function flaw(value: any | Merchant): gracely.Flaw {
		return {
			type: "model.Merchant",
			flaws: typeof(value) != "object" ? undefined :
				[
					authly.Identifier.is((value as any).id) || { property: "id", type: "authly.Identifier" },
					typeof value.name == "string" || { property: "name", type: "string" },
					...(Configuration.flaw(value).flaws || []),
				].filter(gracely.Flaw.is) as gracely.Flaw[],
		}
	}
	export namespace V1 {
		export type Key = MerchantV1.Key
		export namespace Key {
			export const is = MerchantV1.Key.is
			export const flaw = MerchantV1.Key.flaw
		}
	}
}
