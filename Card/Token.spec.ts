import * as model from "../index"

describe("Card Token", () => {
	it("is minimal", async () => {
		const card: model.Card.Token = {
			encrypted: "123.123.123",
			expires: [12, 26],
		}
		expect(model.Card.Token.is(card)).toBeTruthy()
	})
	it("Card Creatable", async () => {
		const card: model.Card.Creatable = {
			pan: "5105105105105100",
			expires: [2, 22],
			csc: "123",
			verification: {
				type: "pares",
			},
		}
		expect(model.Card.Creatable.is(card)).toBeTruthy()
	})
})
