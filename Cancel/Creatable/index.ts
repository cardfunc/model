
export interface Creatable {
	descriptor?: string
}

export namespace Creatable {
	export function is(value: Creatable | any): value is Creatable {

		if ("descriptor" in value && typeof(value.descriptor) != "string") {
			return false
		}

		return true
	}
}
