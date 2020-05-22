export interface Creatable {
	colorDepth: "1" | "4" | "8" | "15" | "16" | "24" | "32" | "48"
	java: boolean
	language: string
	timezone: string
	height: string
	width: string
}

// tslint:disable-next-line: no-namespace
export namespace Creatable {
	export function is(value: Creatable | any): value is Creatable {
		return typeof value == "object" &&
			typeof value.colorDepth == "string" && ["1", "4", "8", "15", "16", "24", "32", "48"].includes(value.colorDepth) &&
			typeof value.java == "boolean" &&
			typeof value.language == "string" && value.language.length >= 1 && value.language.length <= 8 &&
			typeof value.timezone == "string" && /^[+-]?[0-9]{1,4}$/.test(value.timezone) &&
			typeof value.height == "string" && /^[0-9]{1,6}$/.test(value.height) &&
			typeof value.width == "string" && /^[0-9]{1,6}$/.test(value.width)
	}
}
