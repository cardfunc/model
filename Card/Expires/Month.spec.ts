import * as model from "../../"

describe("Expires.Month", () => {
	it("is 12", async () => {
		const month: model.Card.Expires.Month = 12
		expect(model.Card.Expires.Month.is(month)).toBeTruthy()
	})
	it("is 2", async () => {
		const month: model.Card.Expires.Month = 12
		expect(model.Card.Expires.Month.is(month)).toBeTruthy()
	})
})
