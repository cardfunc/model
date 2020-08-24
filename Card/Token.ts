import * as authly from "authly"
import { verify as verifyToken } from "../verify"
import { Scheme } from "./Scheme"
import { Expires } from "./Expires"

export interface Token {
	type: "single use" | "recurring"
	card: authly.Identifier
	scheme?: Scheme
	iin?: string
	last4?: string
	expires?: Expires
	verification?: { type: "pares" | "method" | "challenge", data?: string | { [property: string]: string }}
}

export namespace Token {
	export function is(value: Token | any): value is Token {
		return typeof value == "object" &&
			(value.type == "single use" || value.type == "recurring") &&
			authly.Identifier.is(value.card) &&
			(value.scheme == undefined || Scheme.is(value.scheme)) &&
			(value.iin == undefined || typeof value.iin == "string" && value.iin.length == 6) &&
			(value.last4 == undefined || typeof value.last4 == "string" && value.last4.length == 4) &&
			(value.expires == undefined || Expires.is(value.expires)) &&
			(value.verification == undefined || typeof(value.verification) == "object" &&
				(
					value.verification.type == "pares" && value.verification.data == undefined ||
					value.verification.type == "method" ||
					value.verification.type == "challenge"
				)
				&&
				(
					value.verification.data == undefined ||
					typeof value.verification.data == "string" ||
					typeof value.verification.data == "object" && Object.values(value.verification.data).every(item => typeof item == "string")
				)
			)
	}
	export function hasInfo(value: Token | any): value is Token & { scheme: Scheme, iin: string, last4: string, expires: Expires } {
		return is(value) &&
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
