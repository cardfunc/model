import * as gracely from "gracely"
import * as authly from "authly"
import { Key as MerchantKey } from "./Key"
import * as MerchantV1 from "./V1"
import { Configuration as CConfiguration } from "./Configuration"

export interface Merchant {
	id: authly.Identifier
	name: string
	url: string
	card: CConfiguration
}

// tslint:disable: no-shadowed-variable
export namespace Merchant {
	export function is(value: any | Merchant): value is Merchant {
		return typeof value == "object" &&
			authly.Identifier.is((value as any).id) &&
			typeof value.name == "string" &&
			typeof value.url == "string" &&
			CConfiguration.is(value.card) &&
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
					...(CConfiguration.flaw(value.card).flaws ?? [{ property: "card", type: "model.Merchant.Configuration", flaws: undefined }]),
				].filter(gracely.Flaw.is) as gracely.Flaw[],
		}
	}
	export type Configuration = CConfiguration
	export namespace Configuration {
		export const is = CConfiguration.is
		export const flaw = CConfiguration.flaw
		export type Card = CConfiguration.Card
		export namespace Card {
			export const is = CConfiguration.Card.is
			export const flaw = CConfiguration.Card.flaw
			export type Safe = CConfiguration.Card.Safe
			export namespace Safe {
				export const is = CConfiguration.Card.Safe.is
				export const flaw = CConfiguration.Card.Safe.flaw
			}
		}
		export type Override = CConfiguration.Override
		export namespace Override {
			export const is = CConfiguration.Override.is
			export const flaw = CConfiguration.Override.flaw
		}
		export type Safe = CConfiguration.Safe
		export namespace Safe {
			export const is = CConfiguration.Safe.is
			export const flaw = CConfiguration.Safe.flaw
		}
	}
	export type Key = MerchantKey
	export namespace Key {
		export const is = MerchantKey.is
		export const flaw = MerchantKey.flaw
		export const upgrade = MerchantKey.upgrade
		export type Safe = MerchantKey.Safe
		export namespace Safe {
			export const is = MerchantKey.Safe.is
			export const flaw = MerchantKey.Safe.flaw
			export const upgrade = MerchantKey.Safe.upgrade
		}
	}
	export namespace V1 {
		export type Key = MerchantV1.Key
		export namespace Key {
			export const is = MerchantV1.Key.is
			export const flaw = MerchantV1.Key.flaw
			export type Safe = MerchantV1.Key.Safe
			export namespace Safe {
				export const is = MerchantV1.Key.Safe.is
				export const flaw = MerchantV1.Key.Safe.flaw
			}
		}
	}
}
