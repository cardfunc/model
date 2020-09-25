export type Email = string

export namespace Email {
	export function is(value: Email | any): value is Email {
		return typeof value.email == "string" && value.email.length <= 254 && /\S+@\S+/.test(value.email) // Very rough filter, denying only very obvious non email-adresses.
	}
}
