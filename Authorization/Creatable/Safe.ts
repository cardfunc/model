import * as authly from "authly"
import { Base as CBase } from "./Base"

export interface Safe extends CBase {
	card?: authly.Token
}

export namespace Safe {
	// tslint:disable-next-line: no-shadowed-variable
	export function is(value: Safe | any): value is Safe {
		return typeof value == "object" &&
			(value.card == undefined || authly.Token.is(value.card)) &&
			CBase.is(value)
	}
}
