export interface Creatable {
	descriptor?: string
	amount?: number
}

export namespace Creatable {
	export function is(value: Creatable | any): value is Creatable {
		return typeof(value) == "object" &&
			(value.descriptor == undefined || typeof(value.descriptor) == "string") &&
			(value.amount == undefined || typeof(value.amount) == "number")
	}
}
