import * as isoly from "isoly"
import * as authly from "authly"
import { Verifier } from "../Verifier"
import { Expires } from "./Expires"

export interface Token {
	issuer: "card"
	created: isoly.DateTime
	audience: "production" | "development"
	encrypted: string
	expires: Expires
	reference?: string
	verification?: { type: "pares" | "method" | "challenge"; data?: string | { [property: string]: any } }
}

export namespace Token {
	export function is(value: Token | any): value is Token {
		return (
			typeof value == "object" &&
			["production", "development"].some(a => a == value.audience) &&
			isoly.DateTime.is(value.created) &&
			value.issuer == "card" &&
			typeof value.encrypted == "string" &&
			Expires.is(value.expires) &&
			(value.reference == undefined || typeof value.reference == "string") &&
			(value.verification == undefined ||
				(typeof value.verification == "object" &&
					(value.verification.type == "pares" ||
						value.verification.type == "method" ||
						value.verification.type == "challenge") &&
					(value.verification.data == undefined ||
						typeof value.verification.data == "string" ||
						typeof value.verification.data == "object")))
		)
	}
	export function getVerificationTarget(token: Token, baseUrl: string, parent: string): string {
		return (
			baseUrl +
			"/card/" +
			token.encrypted +
			token.expires[0].toString().padStart(2, "0") +
			token.expires[1].toString().padStart(2, "0") +
			"/verification?mode=iframe&parent=" +
			parent
		)
	}
	const transformers = [
		new authly.Property.Typeguard(is),
		new authly.Property.Renamer({
			encrypted: "enc",
			verification: "ver",
			expires: "xpr",
			audience: "aud",
			issuer: "iss",
			created: "iat",
			reference: "ref",
		}),
		new authly.Property.Converter({
			iat: {
				forward: value => (isoly.DateTime.is(value) ? isoly.DateTime.parse(value).getTime() : value),
				backward: value => (typeof value == "number" ? isoly.DateTime.create(new Date(value * 1000)) : value),
			},
		}),
	]
	const verifier = Verifier.create<Token>().add(...transformers)
	export async function verify(token: authly.Token): Promise<(Token & authly.Payload) | undefined> {
		return await verifier.verify(token)
	}
}
