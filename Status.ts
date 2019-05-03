export type Status =
	"created" |
	"authorizing" |
	"authorized" |
	"unauthorized" |
	"captured" |
	"canceled" |
	"failed"

export namespace Status {
	export function is(value: Status | any): value is Status {
		return typeof(value) == "string" && (
			value == "created" ||
			value == "authorizing" ||
			value == "authorized" ||
			value == "unauthorized" ||
			value == "captured" ||
			value == "canceled" ||
			value == "failed"
		)
	}
}
