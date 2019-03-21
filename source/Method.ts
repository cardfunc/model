export type Method =
	"card" |
	"one-click" |
	"init-recurring" |
	"recurring" |
	"card-masterpass" |
	"init-recurring-masterpass"

export namespace Method {
	export function is(value: Method | any): value is Method {
		return typeof(value) == "string" && (
			value == "card" ||
			value == "one-click" ||
			value == "init-recurring" ||
			value == "recurring" ||
			value == "card-masterpass" ||
			value == "init-recurring-masterpass"
		)
	}
}
