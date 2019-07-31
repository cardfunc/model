export interface Redirect {
	url: string
	method: "get" | "post" | "put"
	data: { [key: string]: string }
}
