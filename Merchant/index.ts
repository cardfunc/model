import * as authly from "authly"
import { CategoryCode as MerchantCategoryCode } from "./CategoryCode"
import { Creatable as MerchantCreatable } from "./Creatable"
import { Key as MerchantKey } from "./Key"

export interface Merchant extends MerchantCreatable {
	id: authly.Identifier
}

// tslint:disable: no-shadowed-variable
// tslint:disable-next-line:no-namespace
export namespace Merchant {
	export function is(value: any | Merchant): value is Merchant {
		return Creatable.is(value) &&
			authly.Identifier.is((value as any).id)
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
