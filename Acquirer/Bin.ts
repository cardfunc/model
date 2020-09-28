import * as gracely from "gracely"

export interface Bin {
	[scheme: string]: string | undefined
	amex?: string
	dankort?: string
	diners?: string
	discover?: string
	electron?: string
	interpayment?: string
	jcb?: string
	maestro?: string
	mastercard?: string
	unionpay?: string
	visa?: string
}

export namespace Bin {
	export function is(value: any | Bin): value is Bin {
		return (
			typeof value == "object" &&
			(value.amex == undefined || typeof value.amex == "string") &&
			(value.dankort == undefined || typeof value.dankort == "string") &&
			(value.diners == undefined || typeof value.diners == "string") &&
			(value.discover == undefined || typeof value.discover == "string") &&
			(value.electron == undefined || typeof value.electron == "string") &&
			(value.interpayment == undefined || typeof value.interpayment == "string") &&
			(value.jcb == undefined || typeof value.jcb == "string") &&
			(value.maestro == undefined || typeof value.maestro == "string") &&
			(value.mastercard == undefined || typeof value.mastercard == "string") &&
			(value.unionpay == undefined || typeof value.unionpay == "string") &&
			(value.visa == undefined || typeof value.visa == "string")
		)
	}
	export function flaw(value: any | Bin): gracely.Flaw {
		return {
			type: "model.Acquirer.Bin",
			flaws:
				typeof value.bin != "object"
					? undefined
					: ([
							typeof value.bin.amex == "string" ||
								value.bin.amex == undefined || { property: "amex", type: "string | undefined" },
							typeof value.bin.dankort == "string" ||
								value.bin.dankort == undefined || { property: "dankort", type: "string | undefined" },
							typeof value.bin.diners == "string" ||
								value.bin.diners == undefined || { property: "diners", type: "string | undefined" },
							typeof value.bin.discover == "string" ||
								value.bin.discover == undefined || { property: "discover", type: "string | undefined" },
							typeof value.bin.electron == "string" ||
								value.bin.electron == undefined || { property: "electron", type: "string | undefined" },
							typeof value.bin.interpayment == "string" ||
								value.bin.interpayment == undefined || { property: "interpayment", type: "string | undefined" },
							typeof value.bin.jcb == "string" ||
								value.bin.jcb == undefined || { property: "jcb", type: "string | undefined" },
							typeof value.bin.maestro == "string" ||
								value.bin.maestro == undefined || { property: "maestro", type: "string | undefined" },
							typeof value.bin.mastercard == "string" ||
								value.bin.mastercard == undefined || { property: "mastercard", type: "string | undefined" },
							typeof value.bin.unionpay == "string" ||
								value.bin.unionpay == undefined || { property: "unionpay", type: "string | undefined" },
							typeof value.bin.visa == "string" ||
								value.bin.visa == undefined || { property: "visa", type: "string | undefined" },
					  ].filter(gracely.Flaw.is) as gracely.Flaw[]),
		}
	}
}
