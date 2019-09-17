export interface Creatable {
	amount?: number,
	descriptor?: string
}

export namespace Creatable {
	export function is(value: Creatable | any): value is Creatable {
		return (typeof value.amount     === "undefined" || typeof value.amount     == "number") &&
		       (typeof value.descriptor === "undefined" || typeof value.descriptor == "string")
		
	}
}
