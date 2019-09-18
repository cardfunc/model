export interface Creatable {
	amount?: number,
	descriptor?: string
}

export namespace Creatable {
	export function is(value: Creatable | any): value is Creatable {
		return (value.amount == undefined || typeof value.amount == "number") &&
						(value.descriptor == undefined || typeof value.descriptor == "string") &&
						Object.keys(value).every(key => key == "amount" || key == "descriptor")
	}
}
