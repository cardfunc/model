import * as model from "../index"

describe("Card Token", () => {
	it("Test", () => {
		const test = model.Card.Token.is({})
		expect(test).toEqual(false)
	})
})
