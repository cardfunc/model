
export interface Creatable {
	descriptor?: string
}

export namespace Creatable {
	export function is(value: Creatable | any): value is Creatable {
		let result = true
		if ("descriptor" in value && typeof(value.descriptor) != "string") result = false
		return result
	}
}
