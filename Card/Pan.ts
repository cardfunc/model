import { Scheme } from "./Scheme"

export type Pan = string

export namespace Pan {
	export function is(value: Pan | any): value is Pan {
		return typeof(value) == "string" &&
			value.length >= 12 && value.length <= 19 &&
			Array.from(value).every(c => c >= "0" && c <= "9")
	}
	export function scheme(pan: Pan): Scheme {
		let result: Scheme = "unknown"
		for (const key in schemes)
			if (schemes.hasOwnProperty(key) && schemes[key].identification.test(pan) && Scheme.is(key)) {
				result = key
				break
			}
		return result
	}
	export function valid(pan: Pan): boolean {
		const s = scheme(pan)
		return s != undefined && schemes[s].verification.test(pan)
	}
	export function last4(pan: Pan): string {
		return pan.substring(pan.length - 4)
	}
}

const schemes: { [scheme: string]: { verification: RegExp, identification: RegExp, length: number, icon: string }} = {
	amex: { verification: /^3[47][0-9]{13}$/, identification: /^3[47]/, length: 18, icon: "amex"},
	dankort: { verification: /^(5019)\d+$/, identification: /^(5019)\d+/, length: 19, icon: "generic"},
	diners: { verification: /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/, identification: /^3(?:0[0-5]|[68][0-9])/, length: 14, icon: "diners" },
	discover: { verification: /^6(?:011|5[0-9]{2})[0-9]{12}$/, identification: /^6(?:011|5[0-9]{2})/, length: 19, icon: "generic" },
	electron: { verification: /^(4026|417500|4405|4508|4844|4913|4917)\d+$/, identification: /^(4026|417500|4405|4508|4844|4913|4917)/, length: 19, icon: "generic" },
	interpayment: {verification: /^(636)\d+$/, identification: /^(636)/, length: 19, icon: "generic" },
	jcb: { verification: /^(?:2131|1800|35\d{3})\d{11}$/, identification: /^(?:2131|1800|35\d{3})/, length: 19, icon: "generic" },
	maestro: { verification: /^(5018|5020|5038|5612|5893|6304|6759|6761|6762|6763|0604|6390)\d+$/, identification: /^(5018|5020|5038|5612|5893|6304|6759|6761|6762|6763|0604|6390)/, length: 19, icon: "maestro" },
	mastercard: { verification: /^5[1-5][0-9]{14}$/, identification: /^5[1-5][0-9]/, length: 19, icon: "mastercard" },
	unionpay: { verification: /^(62|88)\d+$/, identification: /^(62|88)/, length: 19, icon: "generic" },
	visa: { verification: /^4[0-9]{12}(?:[0-9]{3})?$/, identification: /^4[0-9]/, length: 16, icon: "visa" },
}
