import * as authly from "authly"
import { verify as verifyToken } from "../verify"

export interface Token {
	id: authly.Identifier
	pares?: string
}

export namespace Token {
	export function is(value: Token | any): value is Token {
		return typeof value == "object" &&
			authly.Identifier.is(value.id) &&
			(value.pares == undefined || typeof value.pares == "string")
	}
	export async function verify(token: authly.Token): Promise<Token & authly.Payload | undefined> {
		const result = await verifyToken(token)
		return is(result) ? result : undefined
	}
}
