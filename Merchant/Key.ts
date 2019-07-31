import * as authly from "authly"
import { Base } from "./Base"

export interface Key extends Base, authly.Payload {
	sub: string
	iss: string
	aud: "public" | "private"
	iat: number
	user?: string
}

export namespace Key {
	export function is(value: Key | any): value is Key {
		return Base.is(value) &&
			typeof(value.sub) == "string" &&
			typeof(value.iss) == "string" &&
			typeof(value.iat) == "number" &&
			(
				value.aud == "public" && value.user == undefined ||
				value.aud == "private" && typeof(value.user) == "string"
			)
	}
}
