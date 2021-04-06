import * as gracely from "gracely"
import * as authly from "authly"
import { Key as MerchantKey } from "../Key"
import * as MerchantV1 from "../Key/V1"
import { Card as MerchantConfiguration } from "./Card"
import { Creatable as CardCreatable } from "./Card/Creatable"
import { Emv3d as MerchantEmv3d } from "./Emv3d"

export interface Merchant {
	id: authly.Identifier
	name: string
	url: string
	card: MerchantConfiguration
}

export namespace Merchant {
	export function is(value: any | Merchant): value is Merchant {
		return (
			typeof value == "object" &&
			authly.Identifier.is((value as any).id) &&
			typeof value.name == "string" &&
			typeof value.url == "string" &&
			MerchantConfiguration.is(value.card) &&
			typeof value.card.url == "string" &&
			(value.card.id == undefined || authly.Identifier.is(value.card.id))
		)
	}
	export function flaw(value: any | Merchant): gracely.Flaw {
		return {
			type: "model.Merchant",
			flaws:
				typeof value != "object"
					? undefined
					: ([
							authly.Identifier.is((value as any).id) || { property: "id", type: "authly.Identifier" },
							typeof value.name == "string" || { property: "name", type: "string" },
							typeof value.url == "string" || { property: "url", type: "string" },
							...(MerchantConfiguration.flaw(value.card).flaws ?? [
								{ property: "card", type: "model.Merchant.Configuration", flaws: undefined },
							]),
					  ].filter(gracely.Flaw.is) as gracely.Flaw[]),
		}
	}
	export type Card = MerchantConfiguration
	export namespace Card {
		export const is = MerchantConfiguration.is
		export const flaw = MerchantConfiguration.flaw
		export type Creatable = CardCreatable
		export namespace Creatable {
			export const is = CardCreatable.is
			export const flaw = CardCreatable.flaw
		}
	}
	export type Emv3d = MerchantEmv3d
	export namespace Emv3d {
		export const is = MerchantEmv3d.is
		export const flaw = MerchantEmv3d.flaw
		export type Configuration = MerchantEmv3d.Configuration
		export namespace Configuration {
			export const is = MerchantEmv3d.Configuration.is
			export const flaw = MerchantEmv3d.Configuration.flaw
		}
		export type Protocol = MerchantEmv3d.Protocol
		export namespace Protocol {
			export const is = MerchantEmv3d.Protocol.is
			export const flaw = MerchantEmv3d.Protocol.flaw
		}
	}
	export type Key = MerchantKey
	export namespace Key {
		export const is = MerchantKey.is
		export const flaw = MerchantKey.flaw
		export const extractCardUrl = MerchantKey.extractCardUrl
		export const upgrade = MerchantKey.upgrade
		export type Audience = MerchantKey.Audience
		export namespace Audience {
			export const is = MerchantKey.Audience.is
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
