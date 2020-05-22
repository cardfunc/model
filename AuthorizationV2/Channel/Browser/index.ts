import { Creatable as CCreatable } from "./Creatable"

export interface Browser extends CCreatable {
	accept: string
	agent: string
	ip?: string
	verification: "Y" | "N" | "U"
	notification: string
}

// tslint:disable-next-line: no-namespace
export namespace Browser {
	export function is(value: Browser | any): value is Browser {
		return typeof value == "object" &&
			typeof value.accept == "string" && value.accept.length <= 2048 &&
			typeof value.agent == "string" &&
			(value.ip == undefined || typeof value.ip == "string" && value.ip.length <= 45) &&
			(value.verification == "Y" || value.verification == "N" || value.verification == "U") &&
			typeof value.notification == "string" && value.notification.length <= 256 &&
			Creatable.is(value)
	}
	export type Creatable = CCreatable
	export namespace Creatable {
		// tslint:disable-next-line: no-shadowed-variable
		export const is = CCreatable.is
	}
}
