import * as isoly from "isoly"
import * as gracely from "gracely"
import * as Acquirer from "../Acquirer"
import { CategoryCode } from "./CategoryCode"

export interface Creatable {
	name: string
	descriptor?: string
	country: isoly.CountryCode.Alpha2
	acquirer: Acquirer.Settings
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
	emv3d?: {
		protocol: "ch3d1",
		url: string,
	}
}

// tslint:disable-next-line:no-namespace
export namespace Creatable {
	export function is(value: any | Creatable): value is Creatable {
		return typeof value == "object" &&
			typeof value.name == "string" &&
			(value.descriptor == undefined || typeof value.descriptor == "string") &&
			isoly.CountryCode.Alpha2.is(value.country) &&
			Acquirer.Settings.is(value.acquirer) &&
			CategoryCode.is(value.mcc) &&
			binIs(value.bin) &&
			(value.emv3d == undefined || emv3dIs(value.emv3d))
	}
	function emv3dIs(value: any): value is { protocol: "ch3d1", url: string } {
		return typeof value.emv3d == "object" && value.emv3d.protocol == "ch3d1" && typeof value.emv3d.url == "string"
	}
	function binIs(bin: any): boolean {
		return typeof(bin) == "object" &&
		(bin.amex == undefined || typeof bin.amex == "string") &&
		(bin.dankort == undefined || typeof bin.dankort == "string") &&
		(bin.diners == undefined || typeof bin.diners == "string") &&
		(bin.discover == undefined || typeof bin.discover == "string") &&
		(bin.electron == undefined || typeof bin.electron == "string") &&
		(bin.interpayment == undefined || typeof bin.interpayment == "string") &&
		(bin.jcb == undefined || typeof bin.jcb == "string") &&
		(bin.maestro == undefined || typeof bin.maestro == "string") &&
		(bin.mastercard == undefined || typeof bin.mastercard == "string") &&
		(bin.unionpay == undefined || typeof bin.unionpay == "string") &&
		(bin.visa == undefined || typeof bin.visa == "string")
	}
	export function flaw(value: any | Creatable): gracely.Flaw {
		return {
			type: "model.Merchant.Creatable",
			flaws: typeof(value) != "object" ? undefined :
				[
					typeof(value.name) == "string" || { property: "name", type: "string" },
					(value.descriptor == undefined || typeof value.descriptor  == "string") || { property: "descriptor", type: "string" },
					isoly.CountryCode.Alpha2.is(value.country) || { property: "country", type: "isoly.CountryCode" },
					Acquirer.Settings.is(value.acquirer) || { property: "acquirer", type: "model.Acquirer.Settings" },
					CategoryCode.is(value.mcc) || { property: "mcc", type: "model.Merchant.CategoryCode" },
					binIs(value.bin) || {
						type: "{ amex?: string, dankort?: string, diners?: string, discover?: string, electron?: string, interpayment?: string, jcb?: string, maestro?: string, mastercard?: string, unionpay?: string, visa?: string }",
						flaws: typeof value.bin != "object" ? undefined :
							[
								typeof value.bin.amex == "string" || value.bin.amex == undefined || { property: "amex", type: "string | undefined" },
								typeof value.bin.dankort == "string" || value.bin.dankort == undefined || { property: "dankort", type: "string | undefined" },
								typeof value.bin.diners == "string" || value.bin.diners == undefined || { property: "diners", type: "string | undefined" },
								typeof value.bin.discover == "string" || value.bin.discover == undefined || { property: "discover", type: "string | undefined" },
								typeof value.bin.electron == "string" || value.bin.electron == undefined || { property: "electron", type: "string | undefined" },
								typeof value.bin.interpayment == "string" || value.bin.interpayment == undefined || { property: "interpayment", type: "string | undefined" },
								typeof value.bin.jcb == "string" || value.bin.jcb == undefined || { property: "jcb", type: "string | undefined" },
								typeof value.bin.maestro == "string" || value.bin.maestro == undefined || { property: "maestro", type: "string | undefined" },
								typeof value.bin.mastercard == "string" || value.bin.mastercard == undefined || { property: "mastercard", type: "string | undefined" },
								typeof value.bin.unionpay == "string" || value.bin.unionpay == undefined || { property: "unionpay", type: "string | undefined" },
								typeof value.bin.visa == "string" || value.bin.visa == undefined || { property: "visa", type: "string | undefined" },
							].filter(gracely.Flaw.is) as gracely.Flaw[],
						},
					(value.emv3d == undefined || emv3dIs(value.emv3d)) || {
						type: "{ protocol: \"ch3d1\", url: string }",
						flaws: typeof value.emv3d != "object" ? undefined :
							[
								value.emv3d.protocol == "ch3d1" || { property: "protocol", type: "ch3d1" },
								typeof value.emv3d.url == "string" || { property: "url", type: "string" },
							],
					},
				].filter(gracely.Flaw.is) as gracely.Flaw[],
		}
	}
}
