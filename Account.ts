import * as authly from "authly"
import { Verifier } from "./Verifier"

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
	const transformers = [new authly.Property.Typeguard(is)]
	const verifier = Verifier.create<Account>().add(...transformers)
	export async function verify(token: authly.Token): Promise<(Account & authly.Payload) | undefined> {
		return verifier.verify(token)
	}
}
