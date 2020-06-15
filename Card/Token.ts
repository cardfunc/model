import * as authly from "authly"
import { verify as verifyToken } from "../verify"

export interface Token {
	type: "authorization" | "recurring" | "network"
	card: authly.Identifier
}

export namespace Token {
	export function is(value: Token | any): value is Token {
		return typeof value == "object" &&
			(value.type == "authorization" || value.type == "recurring" || value.type == "network") &&
			authly.Identifier.is(value.card)
	}
	export async function verify(token: authly.Token): Promise<Token & authly.Payload | undefined> {
		const result = await verifyToken(token)
		return is(result) ? result : undefined
	}
}
