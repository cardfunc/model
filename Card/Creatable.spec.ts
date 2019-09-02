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
})
