import * as model from "../index"

describe("Card", () => {
	it("is", async () => {
		const card: model.Card = {
			id: "1234abcd",
			reference: "abc0123",
			scheme: "visa",
			iin: "51051051",
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
			scheme: "mastercard",
			iin: "51051051",
			last4: "5100",
			expires: [2, 22],
		})
	})
})
