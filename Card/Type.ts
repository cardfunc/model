export type Type =
	"debit" |
	"credit"

export namespace Type {
	export function is(value: Type | any): value is Type {
		return typeof(value) == "string" && (
			value == "debit" ||
			value == "credit"
		)
	}
}
