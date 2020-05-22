import { Range03 } from "../Range/Range03"
import { Range05 } from "../Range/Range05"

export interface Sdk {
	application: string
	data: string
	publicKey: any
	timeout: string
	reference: string
	transaction: string
	interface?: Range03
	ui: Range05[]
}

export namespace Sdk {
	export function is(value: Sdk | any): value is Sdk {
		return typeof value == "object" &&
			typeof value.applicationID == "string" &&
			typeof value.encryptedData == "string" && value.encryptedData.length <= 64000 &&
			value.ephemeralPublicKey != undefined &&
			typeof value.timeout == "string" && value.timeout.length == 2 && /^(([1-9]\d)|(0[5-9]))$/.test(value.timeout) &&
			typeof value.reference == "string" && value.reference.length <= 32 &&
			typeof value.transaction == "string" &&
			(value.interface == undefined || Range03.is(value.interface)) &&
			(value.ui == undefined || Array.isArray(value.ui) && value.ui && value.ui.every((type: any) => Range05.is(type)))
	}
}
