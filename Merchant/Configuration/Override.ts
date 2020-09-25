import * as authly from "authly"
import * as gracely from "gracely"

export interface Override {
	url: string
	id?: string
}

export namespace Override {
	export function is(value: any | Override): value is Override {
		return typeof value == "object" &&
			typeof value.url == "string" &&
			(value.id == undefined || authly.Identifier.is(value.id))
	}
	export function flaw(value: any | Override): gracely.Flaw {
		return {
			type: "model.Merchant.Configuration.Override",
			flaws: typeof value != "object" ? undefined :
				[
					typeof value.url == "string" || { property: "url", type: "string" },
					value.id == undefined || authly.Identifier.is(value.id) || { property: "id", type: "string | undefined" },
				].filter(gracely.Flaw.is) as gracely.Flaw[],
		}
	}
}
