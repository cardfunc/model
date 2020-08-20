import * as gracely from "gracely"
import { Protocol } from "./Protocol"

export interface Configuration {
	protocol: Protocol,
	url: string,
	key: string,
}
export namespace Configuration {
	export function is(value: Configuration | any): value is Configuration {
		return typeof value == "object" && Protocol.is(value.protocol) && typeof value.url == "string" && typeof value.key == "string"
	}
	export function flaw(value: Configuration | any): gracely.Flaw {
		return {
			type: "model.Merchant.Emv3d.Configuration",
			flaws: typeof value != "object" ? undefined :
				[
					Protocol.is(value.protocol) || Protocol.flaw(value.protocol),
					typeof value.url == "string" || { property: "url", type: "string" },
					typeof value.key == "string" || { property: "key", type: "string" },
				].filter(gracely.Flaw.is) as gracely.Flaw[],
		}
	}
}
