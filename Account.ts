import * as authly from "authly"
import { verify as verifyToken } from "./verify"

export interface Account {
	id: authly.Identifier
	reference?: string
}

export namespace Account {
	export function is(value: Account | any): value is Account {
		return (
			typeof value == "object" &&
			authly.Identifier.is(value.id) &&
			(value.reference == undefined || typeof value.reference == "string")
		)
	}
	export async function verify(token: authly.Token): Promise<(Account & authly.Payload) | undefined> {
		const result = await verifyToken(token)
		return is(result) ? result : undefined
	}
}
