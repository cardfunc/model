export type Protocol = "clearhaus" | "intergiro"

export namespace Protocol {
	export function is(value: Protocol | any): value is Protocol {
		return typeof value == "string" && (value == "clearhaus" || value == "intergiro")
	}
}
