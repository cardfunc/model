import * as gracely from "gracely"
import * as authly from "authly"
import { Key as MerchantKey } from "./Key"
import * as MerchantV1 from "./V1"
import { Configuration as MerchantConfiguration } from "./Configuration"

export interface Merchant {
	id: authly.Identifier
	name: string
	url: string
	card: MerchantConfiguration
}

// tslint:disable: no-shadowed-variable
export namespace Merchant {
	export function is(value: any | Merchant): value is Merchant {
		return typeof value == "object" &&
			authly.Identifier.is((value as any).id) &&
			typeof value.name == "string" &&
			typeof value.url == "string" &&
			MerchantConfiguration.is(value.card) &&
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
					...(MerchantConfiguration.flaw(value.card).flaws ?? [{ property: "card", type: "model.Merchant.Configuration", flaws: undefined }]),
				].filter(gracely.Flaw.is) as gracely.Flaw[],
		}
	}
	export type Configuration = MerchantConfiguration
	export namespace Configuration {
		export const is = MerchantConfiguration.is
		export const flaw = MerchantConfiguration.flaw
		export type Card = MerchantConfiguration.Card
		export namespace Card {
			export const is = MerchantConfiguration.Card.is
			export const flaw = MerchantConfiguration.Card.flaw
			export type KeyInfo = MerchantConfiguration.Card.KeyInfo
			export namespace KeyInfo {
				export const is = MerchantConfiguration.Card.KeyInfo.is
				export const flaw = MerchantConfiguration.Card.KeyInfo.flaw
			}
		}
		export type Override = MerchantConfiguration.Override
		export namespace Override {
			export const is = MerchantConfiguration.Override.is
			export const flaw = MerchantConfiguration.Override.flaw
		}
		export type KeyInfo = MerchantConfiguration.KeyInfo
		export namespace KeyInfo {
			export const is = MerchantConfiguration.KeyInfo.is
			export const flaw = MerchantConfiguration.KeyInfo.flaw
		}
	}
	export type Key = MerchantKey
	export namespace Key {
		export const is = MerchantKey.is
		export const flaw = MerchantKey.flaw
		export const upgrade = MerchantKey.upgrade
		export type KeyInfo = MerchantKey.KeyInfo
		export namespace KeyInfo {
			export const is = MerchantKey.KeyInfo.is
			export const flaw = MerchantKey.KeyInfo.flaw
			export const unpack = MerchantKey.KeyInfo.unpack
			export const upgrade = MerchantKey.KeyInfo.upgrade
		}
	}
	export namespace V1 {
		export type Key = MerchantV1.Key
		export namespace Key {
			export const is = MerchantV1.Key.is
			export const flaw = MerchantV1.Key.flaw
			export type KeyInfo = MerchantV1.Key.KeyInfo
			export namespace KeyInfo {
				export const is = MerchantV1.Key.KeyInfo.is
				export const flaw = MerchantV1.Key.KeyInfo.flaw
			}
		}
	}
}
