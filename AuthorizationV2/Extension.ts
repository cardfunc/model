export interface Extension {
	critical: boolean
	data: any
	id: string
	name: string
}

// tslint:disable-next-line: no-namespace
export namespace Extension {
	export function is(value: Extension | any): value is Extension {
		return typeof value == "object" &&
			typeof value.critical == "boolean" &&
			value.data != undefined &&
			typeof value.id == "string" && value.id.length <= 64 &&
			typeof value.name == "string" && value.name.length <= 64
	}
}
