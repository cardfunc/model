import { Protocol } from "./Protocol"

export interface Settings {
	id?: string
	protocol: Protocol
	url: string
	key: string
}

export namespace Settings {
	export function is(value: Settings | any): value is Settings {
		return typeof(value) == "object" &&
			(value.id == undefined || typeof(value.id) == "string") &&
			Protocol.is(value.protocol) &&
			typeof(value.url) == "string" &&
			typeof(value.key) == "string"
	}
}
