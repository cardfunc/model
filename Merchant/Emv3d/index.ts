import * as gracely from "gracely"
import { Protocol } from "./Protocol"

export interface Emv3d {
	protocol: Protocol,
	url: string,
	key: string,
}
export namespace Emv3d {
	export function is(value: Emv3d | any): value is Emv3d {
		return typeof value == "object" && Protocol.is(value.protocol) && typeof value.url == "string" && typeof value.key == "string"
	}
	export function flaw(value: Emv3d | any): gracely.Flaw {
		return {
			type: "model.Merchant.Emv3d",
			flaws: typeof value.emv3d != "object" ? undefined :
				[
					Protocol.is(value.protocol) || Protocol.flaw(value.protocol),
					typeof value.url == "string" || { property: "url", type: "string" },
					typeof value.key == "string" || { property: "key", type: "string" },
				].filter(gracely.Flaw.is) as gracely.Flaw[],
		}
	}
}
