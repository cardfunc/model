import * as authly from "authly"
import { Creatable } from "./Creatable"

export interface Key extends Creatable, authly.Payload {
	sub: string
	iss: string
	aud: "public" | "private"
	iat: number
	user?: string
}

export namespace Key {
	export function is(value: Key | any): value is Key {
		return Creatable.is(value) &&
			typeof((value as any).sub) == "string" &&
			typeof((value as any).iss) == "string" &&
			typeof((value as any).iat) == "number" &&
			(
				(value as any).aud == "public" && (value as any).user == undefined ||
				(value as any).aud == "private" && typeof((value as any).user) == "string"
			)
	}
}
