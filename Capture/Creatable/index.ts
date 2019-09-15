
export interface Creatable {
	amount?: number,
	descriptor?: string
}

export namespace Creatable {
	export function is(value: Creatable | any): value is Creatable {

		if ('amount' in value && typeof(value.amount) != "number") {
			return false;
		}

		if ('textOnStatment' in value && typeof(value.textOnStatment) != 'string') {
			return false;
		}

		return true;
	}
}
