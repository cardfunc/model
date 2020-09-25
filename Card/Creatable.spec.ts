import * as model from "../index"

describe("Card.Creatable", () => {
	it("is 12/20", async () => {
		const card: model.Card.Creatable = {
			pan: "123456789000",
			csc: "123",
			expires: [12, 20],
		}
		expect(model.Card.Creatable.is(card)).toBeTruthy()
	})
	it("is 2/22", async () => {
		const card: model.Card.Creatable = {
			pan: "5105105105105100",
			expires: [2, 22],
			csc: "123",
		}
		expect(model.Card.Creatable.is(card)).toBeTruthy()
	})
	it("is card with verification (pares)", async () => {
		const card: model.Card.Creatable = {
			pan: "5105105105105100",
			expires: [2, 22],
			csc: "123",
			verification: {
				type: "pares",
				data: "examplepares",
			},
		}
		expect(model.Card.Creatable.is(card)).toBeTruthy()
	})
	it("is card with verification (method)", async () => {
		const card: model.Card.Creatable = {
			pan: "4111111111111111",
			expires: [2, 22],
			csc: "123",
			verification: {
				type: "method",
				data: {
					someProperty: "example1",
					anotherProperty: "example2",
				},
			},
		}
		expect(model.Card.Creatable.is(card)).toBeTruthy()
	})
	it("is card with verification (challenge)", async () => {
		const card: model.Card.Creatable = {
			pan: "4111111111111111",
			expires: [2, 22],
			csc: "123",
			verification: {
				type: "challenge",
				data: {
					something: "example3",
					another: "example4",
					nothing: "",
				},
			},
		}
		expect(model.Card.Creatable.is(card)).toBeTruthy()
	})
	it("is 2/22", async () => {
		const card: model.Card.Creatable = {
			pan: "4111111111111111",
			expires: [2, 22],
			csc: "123",
			client: {
				ip: "192.168.0.1",
				browser: {
					userAgent: "example",
					acceptHeader: "application/json; charset=utf-8",
					width: "900",
					height: "700",
					java: false,
					javascript: false,
					language: "sv",
					timezone: "+1000",
				},
			},
		}
		expect(model.Card.Creatable.is(card)).toBeTruthy()
	})
})
