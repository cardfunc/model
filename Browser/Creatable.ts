export interface Creatable {
	colorDepth?: string
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
			(value.colorDepth == undefined || typeof value.colorDepth == "string") &&
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
