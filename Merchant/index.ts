import * as isoly from "isoly"
import * as Aquirer from "../Acquirer"
import { CategoryCode as MerchantCategoryCode } from "./CategoryCode"

export interface Merchant {
	name: string
	descriptor?: string
	country: isoly.CountryCode.Alpha2
	acquirer: Aquirer.Settings
	mcc: MerchantCategoryCode
	bin: {
		amex?: string,
		dankort?: string,
		diners?: string,
		discover?: string,
		electron?: string,
		interpayment?: string,
		jcb?: string,
		maestro?: string,
		mastercard?: string,
		unionpay?: string,
		visa?: string,
	}
}

// tslint:disable-next-line:no-namespace
export namespace Merchant {
	export function is(value: any | Merchant): value is Merchant {
		return typeof(value) == "object" &&
			typeof(value.name) == "string" &&
			(value.descriptor == undefined && typeof(value.descriptor) == "string") &&
			isoly.CountryCode.Alpha2.is(value.country) &&
			Aquirer.Settings.is(value.acquirer) &&
			MerchantCategoryCode.is(value.mcc) &&
			typeof(value.bin) == "object" &&
			(value.amex == undefined || typeof(value.amex) == "string") &&
			(value.dankort == undefined || typeof(value.dankort) == "string") &&
			(value.diners == undefined || typeof(value.diners) == "string") &&
			(value.discover == undefined || typeof(value.discover) == "string") &&
			(value.electron == undefined || typeof(value.electron) == "string") &&
			(value.interpayment == undefined || typeof(value.interpayment) == "string") &&
			(value.jcb == undefined || typeof(value.jcb) == "string") &&
			(value.maestro == undefined || typeof(value.maestro) == "string") &&
			(value.mastercard == undefined || typeof(value.mastercard) == "string") &&
			(value.unionpay == undefined || typeof(value.unionpay) == "string") &&
			(value.visa == undefined || typeof(value.visa) == "string")
	}
	export type CategoryCode = MerchantCategoryCode
	export namespace CategoryCode {
		// tslint:disable-next-line: no-shadowed-variable
		export const is = MerchantCategoryCode.is
	}
}
