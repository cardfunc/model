export type Protocol =
	"clearhaus"

export namespace Protocol {
	export function is(value: Protocol | any): value is Protocol {
		return typeof(value) == "string" && (
			value == "clearhaus"
		)
	}
}
