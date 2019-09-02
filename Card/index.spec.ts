import * as model from "../index"

describe("Card", () => {
	it("is", async () => {
		const card: model.Card = {
			id: "1234abcd",
			scheme: "visa",
			last4: "9000",
			expires: [1, 21],
			type: "credit",
		}
		expect(model.Card.is(card)).toBeTruthy()
	})
	it("from", async () => {
		const card: model.Card.Creatable = {
			pan: "5105105105105100",
			expires: [2, 22],
			csc: "123",
		}
		expect(model.Card.from(card)).toEqual({
			last4: "5100",
			scheme: "mastercard",
			expires: [2, 22],
		})
	})
})
