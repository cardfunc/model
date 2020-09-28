import { Email } from "../../Email"
import { Range04 } from "../Range/Range04"

export interface Delivery {
	email?: Email
	timeframe?: Range04
}

export namespace Delivery {
	export function is(value: Delivery | any): value is Delivery {
		return typeof value == "object" &&
			(value.email == undefined || Email.is(value.email)) &&
			(value.timeframe == undefined || Range04.is(value.timeframe))
	}
}
