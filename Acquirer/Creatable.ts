import { Bin as AcquirerBin } from "./Bin"
import { Protocol as AcquirerProtocol } from "./Protocol"

export interface Creatable {
	id?: string
	protocol?: AcquirerProtocol
	url?: string
	key?: string
	bin?: AcquirerBin
}

export namespace Creatable {
	export function is(value: Creatable | any): value is Creatable {
		return (
			typeof value == "object" &&
			(value.id == undefined || typeof value.id == "string") &&
			(value.protocol == undefined || AcquirerProtocol.is(value.protocol)) &&
			(value.url == undefined || typeof value.url == "string") &&
			(value.key == undefined || typeof value.key == "string") &&
			(value.bin == undefined || AcquirerBin.is(value.bin))
		)
	}
}
