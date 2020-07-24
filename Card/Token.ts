import * as authly from "authly"
import { verify as verifyToken } from "../verify"
import { Scheme } from "./Scheme"
import { Expires } from "./Expires"

export interface Token {
	type: "single use" | "recurring"
	card: authly.Identifier
	scheme: Scheme
	iin: string
	last4: string
	expires: Expires
}

export namespace Token {
	export function is(value: Token | any): value is Token {
		return typeof value == "object" &&
			(value.type == "single use" || value.type == "recurring") &&
			authly.Identifier.is(value.card) &&
			Scheme.is(value.scheme) &&
			typeof value.iin == "string" && value.iin.length == 6 &&
			typeof value.last4 == "string" && value.last4.length == 4 &&
			Expires.is(value.expires)
	}
	export async function verify(token: authly.Token): Promise<Token & authly.Payload | undefined> {
		const result = await verifyToken(token)
		return is(result) ? result : undefined
	}
}
