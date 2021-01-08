import * as authly from "authly"
import { verify as verifyToken } from "../verify"
import { Expires } from "./Expires"

export interface Token {
	encrypted: string
	expires: Expires
	verification?: { type: "pares" | "method" | "challenge"; data?: string | { [property: string]: any } }
}

export namespace Token {
	export function is(value: Token | any): value is Token {
		return (
			typeof value == "object" &&
			typeof value.encrypted == "string" &&
			Expires.is(value.expires) &&
			(value.verification == undefined ||
				(typeof value.verification == "object" &&
					((value.verification.type == "pares" && value.verification.data == undefined) ||
						value.verification.type == "method" ||
						value.verification.type == "challenge") &&
					(value.verification.data == undefined ||
						typeof value.verification.data == "string" ||
						typeof value.verification.data == "object")))
		)
	}
	export function getVerificationTarget(token: Token, baseUrl: string): string {
		return baseUrl + ""
	}
	export async function verify(token: authly.Token): Promise<(Token & authly.Payload) | undefined> {
		const result = await verifyToken(token)
		return is(result) ? result : undefined
	}
}
