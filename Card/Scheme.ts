export type Scheme =
	| "unknown"
	| "amex"
	| "dankort"
	| "diners"
	| "discover"
	| "electron"
	| "interpayment"
	| "jcb"
	| "maestro"
	| "mastercard"
	| "unionpay"
	| "visa"

export namespace Scheme {
	export const types: Scheme[] = [
		"unknown",
		"amex",
		"dankort",
		"diners",
		"discover",
		"electron",
		"interpayment",
		"jcb",
		"maestro",
		"mastercard",
		"unionpay",
		"visa",
	]
	export function is(value: Scheme | any): value is Scheme {
		return (
			typeof value == "string" &&
			(value == "unknown" ||
				value == "amex" ||
				value == "dankort" ||
				value == "diners" ||
				value == "discover" ||
				value == "electron" ||
				value == "interpayment" ||
				value == "jcb" ||
				value == "maestro" ||
				value == "mastercard" ||
				value == "unionpay" ||
				value == "visa")
		)
	}
}
