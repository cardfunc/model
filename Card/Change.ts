import * as gracely from "gracely"
import { Creatable } from "./Creatable"
import { Expires } from "./Expires"

export type Change = Partial<Creatable>

export namespace Change {
	export function is(value: Change | any): value is Change {
		return typeof(value) == "object" &&
			(value.pan == undefined || typeof(value.pan) == "string") &&
			(value.expires == undefined || Expires.is(value.expires)) &&
			(value.csc == undefined || typeof(value.csc) == "string") &&
			(value.pares == undefined || typeof(value.pares) == "string")
	}
	export function flaw(value: Change | any): gracely.Flaw {
		return {
			type: "model.Card.Change",
			flaws: typeof value != "object" ? undefined :
				[
					value.pan == undefined || typeof(value.pan) == "string" || { property: "pan", type: "string | undefined" },
					value.expires == undefined || Expires.is(value.expires) || { property: "expires", type: "string | undefined" },
					value.csc == undefined || typeof(value.csc) == "string" || { property: "csc", type: "string | undefined" },
					value.pares == undefined || typeof(value.pares) == "string" || { property: "pares", type: "string | undefined" },
				].filter(gracely.Flaw.is) as gracely.Flaw[],
		}
	}
}
