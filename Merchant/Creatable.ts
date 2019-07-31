import { Base } from "./Base"

export interface Creatable extends Base {
	user?: string[]
}

// tslint:disable-next-line:no-namespace
export namespace Creatable {
	export function is(value: any | Creatable): value is Creatable {
		return Base.is(value) &&
			(
				value.user == undefined ||
				Array.isArray(value.user) && value.user.every((u: any) => typeof(u) == "string")
			)
	}
}
