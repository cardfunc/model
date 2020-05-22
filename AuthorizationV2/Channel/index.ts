import { Browser as CBrowser } from "./Browser"
import { Sdk as CSdk } from "./Sdk"
import { ThreeRi as CThreeRi } from "./ThreeRi"

export type Channel = CBrowser | CSdk | CThreeRi

export namespace Channel {
	export function is(value: Channel | any): value is Channel {
		return CBrowser.is(value) || CSdk.is(value) || CThreeRi.is(value)
	}
	// tslint:disable: no-shadowed-variable
	export type Browser = CBrowser
	export namespace Browser {
		export const is = CBrowser.is
		export type Creatable = CBrowser.Creatable
		export namespace Creatable {
			// tslint:disable-next-line: no-shadowed-variable
			export const is = CBrowser.Creatable.is
		}
	}
	export type Sdk = CSdk
	export namespace Sdk {
		export const is = CSdk.is
	}
	export type ThreeRi = CThreeRi
	export namespace ThreeRi {
		export const is = CThreeRi.is
	}
}
