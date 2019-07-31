import * as authly from "authly"
import { Base } from "./Base"
import { CategoryCode as MerchantCategoryCode } from "./CategoryCode"
import { Creatable as MerchantCreatable } from "./Creatable"
import { Key as MerchantKey } from "./Key"

export interface Merchant extends Base {
	id: authly.Identifier
	user: string[]
}

// tslint:disable: no-shadowed-variable
// tslint:disable-next-line:no-namespace
export namespace Merchant {
	export function is(value: any | Merchant): value is Merchant {
		return Base.is(value) &&
			(value.id == undefined && authly.Identifier.is(value.id)) &&
			Array.isArray(value.user) && value.user.every((u: any) => typeof(u) == "string")
	}
	export type Creatable = MerchantCreatable
	export namespace Creatable {
		export const is = MerchantCreatable.is
	}
	export type Key = MerchantKey
	export namespace Key {
		export const is = MerchantKey.is
	}
	export type CategoryCode = MerchantCategoryCode
	export namespace CategoryCode {
		export const is = MerchantCategoryCode.is
	}
}
