export interface Creatable {
	colorDepth?: number | "1" | "4" | "8" | "12" | "15" | "16" | "18" | "24" | "30" | "32" | "36" | "48"
	java?: boolean
	javascript?: boolean
	language?: string
	timezone?: string
	height?: string
	width?: string
	parent?: string
}

export namespace Creatable {
	export function is(value: Creatable | any): value is Creatable {
		return (
			typeof value == "object" &&
			(value.colorDepth == undefined ||
				(typeof value.colorDepth == "number" && !isNaN(value.colorDepth) && value.colorDepth >= 1) ||
				(typeof value.colorDepth == "string" &&
					["1", "4", "8", "12", "15", "16", "18", "24", "30", "32", "36", "48"].includes(value.colorDepth))) &&
			(value.java == undefined || typeof value.java == "boolean") &&
			(value.javascript == undefined || typeof value.javascript == "boolean") &&
			(value.language == undefined || typeof value.language == "string") &&
			(value.timezone == undefined || typeof value.timezone == "string") &&
			(value.height == undefined || typeof value.height == "string") &&
			(value.width == undefined || typeof value.width == "string") &&
			(value.parent == undefined || typeof value.parent == "string")
		)
	}
}
