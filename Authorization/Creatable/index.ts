import * as authly from "authly"
import { Base as CBase } from "./Base"
import { Safe as CSafe } from "./Safe"
import { Unsafe as CUnsafe } from "./Unsafe"

export type Creatable = CSafe | CUnsafe

export namespace Creatable {
	export function is(value: Creatable | any): value is Creatable {
		return CSafe.is(value) || CUnsafe.is(value)
	}
	export type Base = CBase
	export namespace Base {
		export const is = CBase.is
	}
	export type Safe = CSafe
	export namespace Safe {
		export const is = CSafe.is
	}
	export type Unsafe = CUnsafe
	export namespace Unsafe {
		export const is = CUnsafe.is
	}
}
