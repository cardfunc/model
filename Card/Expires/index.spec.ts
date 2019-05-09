import * as model from "../../"

describe("Expires", () => {
	it("is 12/20", async () => {
		const expires: model.Card.Expires = [12, 20]
		expect(model.Card.Expires.is(expires)).toBeTruthy()
	})
	it("is 2/22", async () => {
		const expires: model.Card.Expires = [2, 22]
		expect(model.Card.Expires.is(expires)).toBeTruthy()
	})
})
