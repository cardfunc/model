import { Bin as AcquirerBin } from "./Bin"
import { Protocol as AcquirerProtocol } from "./Protocol"

export interface Acquirer {
	id?: string
	protocol?: AcquirerProtocol
	url?: string
	key?: string
	bin?: AcquirerBin
}

export namespace Acquirer {
	export function is(value: Acquirer | any): value is Acquirer {
		return (
			typeof value == "object" &&
			(value.id == undefined || typeof value.id == "string") &&
			(value.protocol == undefined || AcquirerProtocol.is(value.protocol)) &&
			(value.url == undefined || typeof value.url == "string") &&
			(value.key == undefined || typeof value.key == "string") &&
			(value.bin == undefined || AcquirerBin.is(value.bin))
		)
	}
	export type Bin = AcquirerBin
	export namespace Bin {
		export const is = AcquirerBin.is
		export const flaw = AcquirerBin.flaw
	}
}
