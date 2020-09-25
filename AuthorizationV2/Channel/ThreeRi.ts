import { Range05 } from "../Range/Range05"
import { Range8099 } from "../Range/Range8099"

export interface ThreeRi {
	type: Range05 | Range8099
}

export namespace ThreeRi {
	export function is(value: ThreeRi | any): value is ThreeRi {
		return typeof value == "object" && (Range05.is(value.type) || Range8099.is(value.type))
	}
}
