import * as model from "../index"

describe("Card", () => {
	it("is", async () => {
		const card: model.Card = {
			scheme: "visa",
			iin: "510510",
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
		const complete: model.Card = model.Card.from(card)
		expect(complete).toEqual({
			scheme: "mastercard",
			iin: "510510",
			last4: "5100",
			expires: [2, 22],
		})
		const partialCard: model.Card.Change = {
			pan: "5105105105105100",
		}
		const partial: Partial<model.Card> = model.Card.from(partialCard)
		expect(partial).toEqual({
			scheme: "mastercard",
			iin: "510510",
			last4: "5100",
		})
		const expiresOnly: model.Card.Change = {
			expires: [2, 22],
		}
		const expiresOnlyOutput: Partial<model.Card> = model.Card.from(expiresOnly)
		expect(expiresOnlyOutput).toEqual({
			expires: [2, 22],
		})
		const emptyCard: model.Card.Change = {}
		const emptyCardOutput: Partial<model.Card> = model.Card.from(emptyCard)
		expect(emptyCardOutput).toEqual({})
	})
})
