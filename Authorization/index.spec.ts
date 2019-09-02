import * as model from "../index"

describe("Authorization", () => {
	it("is", async () => {
		const authorization: model.Authorization = {
			id: "10001",
			number: "test001",
			created: "2005-05-05T15:05:15Z",
			currency: "SEK",
			amount: 100,
			card: {
				id: "1234abcd",
				scheme: "visa",
				last4: "9000",
				country: "SE",
				type: "credit",
			},
		}
		expect(model.Authorization.is(authorization)).toBeTruthy()
	})
	it("is no card", async () => {
		const authorization: model.Authorization = {
			id: "10001",
			number: "test001",
			created: "2005-05-05T15:05:15Z",
			currency: "SEK",
			amount: 100,
		}
		expect(model.Authorization.is(authorization)).toBeTruthy()
	})
})
