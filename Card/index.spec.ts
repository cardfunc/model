import * as model from "../index"

describe("Card", () => {
	it("is", async () => {
		const card: model.Card = {
			id: "1234abcd",
			scheme: "visa",
			last4: "9000",
			country: "SE",
			type: "credit",
		}
		expect(model.Card.is(card)).toBeTruthy()
	})
})
