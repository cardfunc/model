import * as isoly from "isoly"

export interface Address {
	city?: string
	country?: string
	line1?: string
	line2?: string
	line3?: string
	postCode?: string
	state?: string
}

export namespace Address {
	export function is(value: Address | any): value is Address {
		return typeof value == "object" &&
			(value.city == undefined || typeof value.city == "string" && value.city.length <= 50) &&
			(value.country == undefined || typeof value.country == "string" && (value.country.length == 2 || value.country.length == 3) &&
				(isoly.CountryCode.Numeric.is(value.country.toLocaleUpperCase()) || isoly.CountryCode.Numeric.from(value.country.toLocaleUpperCase()))) &&
			(value.line1 == undefined || typeof value.line1 == "string" && value.line1.length <= 50) &&
			(value.line2 == undefined || typeof value.line2 == "string" && value.line2.length <= 50) &&
			(value.line3 == undefined || typeof value.line3 == "string" && value.line3.length <= 50) &&
			(value.postCode == undefined || typeof value.postCode == "string" && value.postCode.length <= 16) &&
			(value.state == undefined || typeof value.state == "string" && value.state.length <= 3)
	}
	export function compare(first: Address | undefined, second: Address | undefined): boolean | undefined {
		return !first && !second ? undefined : !first || !second ? false :
			compareOneProperty(first.city, second.city) &&
			compareOneProperty(first.country, second.country) &&
			compareOneProperty(first.line1, second.line1) &&
			compareOneProperty(first.line2, second.line2) &&
			compareOneProperty(first.line3, second.line3) &&
			compareOneProperty(first.postCode, second.postCode) &&
			compareOneProperty(first.state, second.state)
	}
	function compareOneProperty(first: string | undefined, second: string | undefined): boolean {
		return !first && !second || first?.trim().toLocaleUpperCase().localeCompare(second?.trim().toLocaleUpperCase() ?? "") == 0
	}
}
