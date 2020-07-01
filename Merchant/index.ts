import * as gracely from "gracely"
import * as authly from "authly"
import { Key as MerchantKey } from "./Key"
import * as MerchantV1 from "./V1"
import { Configuration } from "./Configuration"

export interface Merchant {
	id: authly.Identifier
	name: string
	url: string
	card: Configuration & {
		url: string
		id?: string
	}
}

// tslint:disable: no-shadowed-variable
export namespace Merchant {
	export function is(value: any | Merchant): value is Merchant {
		return typeof value == "object" &&
			authly.Identifier.is((value as any).id) &&
			typeof value.name == "string" &&
			typeof value.url == "string" &&
			Configuration.is(value.card) &&
			typeof value.card.url == "string" &&
			(value.card.id == undefined || authly.Identifier.is(value.card.id))
	}
	export function flaw(value: any | Merchant): gracely.Flaw {
		return {
			type: "model.Merchant",
			flaws: typeof value != "object" ? undefined :
				[
					authly.Identifier.is((value as any).id) || { property: "id", type: "authly.Identifier" },
					typeof value.name == "string" || { property: "name", type: "string" },
					typeof value.url == "string" || { property: "url", type: "string" },
					(Configuration.is(value.card) && typeof value.card.url == "string" && (value.card.id == undefined || authly.Identifier.is(value.card.id))) || { property: "card", type: "Merchant.Configuration & { url: string, id?: string }", flaws: [
						...(Configuration.flaw(value.card).flaws ?? []),
						typeof value.card.url == "string" || { property: "url", type: "string" },
						value.card.id == undefined || authly.Identifier.is(value.card.id) || { property: "id", type: "string | undefined" },
					] },
				].filter(gracely.Flaw.is) as gracely.Flaw[],
		}
	}
	export type Key = MerchantKey
	export namespace Key {
		export const is = MerchantKey.is
		export const flaw = MerchantKey.flaw
		export const upgrade = MerchantKey.upgrade
	}
	export namespace V1 {
		export type Key = MerchantV1.Key
		export namespace Key {
			export const is = MerchantV1.Key.is
			export const flaw = MerchantV1.Key.flaw
		}
	}
}
