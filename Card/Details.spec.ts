import * as model from "../"

describe("Details", () => {
	it("is", async () => {
		const details: model.Card.Details = {
			"name": "Joe Smith",
			"number": "123456789000",
			"csc": "123",
			"expires": [12, 20]
		}
		expect(model.Card.Details.is(details)).toBeTruthy()
	})
	it("is 2", async () => {
		const details: model.Card.Details = {
			"number": "5105105105105100",
			"expires": [10, 22],
			"csc": "123",
		}
		expect(model.Card.Details.is(details)).toBeTruthy()
	})
})
