import * as model from "../../index"

describe("Card", () => {
	it("is", async () => {
		const card: model.Card.V1 = {
			id: "1234abcd",
			reference: "abc0123",
			scheme: "visa",
			iin: "510510",
			last4: "9000",
			expires: [1, 21],
			type: "credit",
		}
		expect(model.Card.V1.is(card)).toBeTruthy()
	})
	it("from", async () => {
		const card: model.Card.Creatable = {
			pan: "5105105105105100",
			expires: [2, 22],
			csc: "123",
		}
		const complete: Omit<model.Card.V1, "id" | "reference"> = model.Card.V1.from(card)
		expect(complete).toEqual({
			scheme: "mastercard",
			iin: "510510",
			last4: "5100",
			expires: [2, 22],
		})
		const partialCard: model.Card.Change = {
			pan: "5105105105105100",
		}
		const partial: Omit<Partial<model.Card.V1>, "id" | "reference"> = model.Card.V1.from(partialCard)
		expect(partial).toEqual({
			scheme: "mastercard",
			iin: "510510",
			last4: "5100",
		})
		const expiresOnly: model.Card.Change = {
			expires: [2, 22],
		}
		const expiresOnlyOutput: Omit<Partial<model.Card.V1>, "id" | "reference"> = model.Card.V1.from(expiresOnly)
		expect(expiresOnlyOutput).toEqual({
			expires: [2, 22],
		})
		const emptyCard: model.Card.Change = {}
		const emptyCardOutput: Omit<Partial<model.Card.V1>, "id" | "reference"> = model.Card.V1.from(emptyCard)
		expect(emptyCardOutput).toEqual({})
	})
})
