import * as gracely from "gracely"
import { Configuration as Emv3dConfiguration } from "./Configuration"
import { Protocol as Emv3dProtocol } from "./Protocol"

export type Emv3d =	Emv3dConfiguration | Emv3dConfiguration[]

export namespace Emv3d {
	export function is(value: Emv3d | any): value is Emv3d {
		return Emv3dConfiguration.is(value) ||
			Array.isArray(value) && value.every(Emv3dConfiguration.is)
	}
	export function flaw(value: Emv3d | any): gracely.Flaw {
		return {
			type: "model.Merchant.Emv3d",
			condition: "model.Merchant.Emv3d.Configuration | model.Merchant.Emv3d.Configuration[]"
		}
	}
	export type Configuration = Emv3dConfiguration
	export namespace Configuration {
		export const is = Emv3dConfiguration.is
		export const flaw = Emv3dConfiguration.flaw
	}
	export type Protocol = Emv3dProtocol
	export namespace Protocol {
		export const is = Emv3dProtocol.is
		export const flaw = Emv3dProtocol.flaw
	}
}
