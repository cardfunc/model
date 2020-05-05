import * as gracely from "gracely"

export type Protocol = "ch3d1" | "ch3d2"

export namespace Protocol {
	export function is(value: Protocol | any): value is Protocol {
		return value == "ch3d1" || value == "ch3d2"
	}
	export function flaw(value: Protocol | any): gracely.Flaw {
		return { type: "model.Merchant.Emv3d.Protocol", property: '"ch3d1" | "ch3d2"' }
	}
}
