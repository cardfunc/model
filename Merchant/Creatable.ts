import * as isoly from "isoly"
import * as Aquirer from "../Acquirer"
import { CategoryCode } from "./CategoryCode"

export interface Creatable {
	name: string
	descriptor?: string
	country: isoly.CountryCode.Alpha2
	acquirer: Aquirer.Settings
	mcc: CategoryCode
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
export namespace Creatable {
	export function is(value: any | Creatable): value is Creatable {
		return typeof(value) == "object" &&
			typeof(value.name) == "string" &&
			(value.descriptor == undefined || typeof(value.descriptor) == "string") &&
			isoly.CountryCode.Alpha2.is(value.country) &&
			Aquirer.Settings.is(value.acquirer) &&
			CategoryCode.is(value.mcc) &&
			typeof(value.bin) == "object" &&
			(value.bin.amex == undefined || typeof(value.bin.amex) == "string") &&
			(value.bin.dankort == undefined || typeof(value.bin.dankort) == "string") &&
			(value.bin.diners == undefined || typeof(value.bin.diners) == "string") &&
			(value.bin.discover == undefined || typeof(value.bin.discover) == "string") &&
			(value.bin.electron == undefined || typeof(value.bin.electron) == "string") &&
			(value.bin.interpayment == undefined || typeof(value.bin.interpayment) == "string") &&
			(value.bin.jcb == undefined || typeof(value.bin.jcb) == "string") &&
			(value.bin.maestro == undefined || typeof(value.bin.maestro) == "string") &&
			(value.bin.mastercard == undefined || typeof(value.bin.mastercard) == "string") &&
			(value.bin.unionpay == undefined || typeof(value.bin.unionpay) == "string") &&
			(value.bin.visa == undefined || typeof(value.bin.visa) == "string")
	}
}
