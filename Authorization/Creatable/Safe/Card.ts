import * as authly from "authly"
import { verify as verifyToken } from "../../../verify"

export interface Card {
	id: authly.Identifier
	pares?: string
}

export namespace Card {
	export function is(value: Card | any): value is Card {
		return typeof value == "object" &&
			authly.Identifier.is(value.id) &&
			(value.pares == undefined || typeof value.pares == "string")
	}
	export async function verify(token: authly.Token): Promise<Card & authly.Payload | undefined> {
		const result = await verifyToken(token)
		return is(result) ? result : undefined
	}
}
