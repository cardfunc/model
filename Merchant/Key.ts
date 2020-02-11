import * as gracely from "gracely"
import * as authly from "authly"
import { Creatable } from "./Creatable"

export interface Key extends Creatable, authly.Payload {
	sub: string
	iss: string
	aud: "public" | "private"
	iat: number
}

export namespace Key {
	export function is(value: Key | any): value is Key {
		return Creatable.is(value) &&
			authly.Identifier.is((value as any).sub) &&
			typeof(value as any).iss == "string" &&
			typeof(value as any).iat == "number" &&
			((value as any).aud == "public" || (value as any).aud == "private")
	}
	export function flaw(value: any | Key): gracely.Flaw {
		return {
			type: "model.Merchant.Key",
			flaws: typeof(value) != "object" ? undefined :
				[
					typeof value.sub == "string" || { property: "sub", type: "authly.Identifier", condition: "Merchant identifier." },
					typeof value.iss == "string" || { property: "iss", type: "string", condition: "Key issuer." },
					typeof value.aud == "string" || { property: "aud", type: `"public" | "private"`, condition: "Key audience." },
					typeof value.iat == "number" || { property: "iat", type: "number", condition: "Issued timestamp." },
					...Creatable.flaw(value).flaws || [],
				].filter(gracely.Flaw.is) as gracely.Flaw[],
		}
	}
}
