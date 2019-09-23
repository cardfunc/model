import * as model from "../index"

describe("Authorization", () => {
	it("is", async () => {
		const authorization: model.Authorization = {
			id: "10001",
			number: "test001",
			reference: "cab-0123-def",
			created: "2005-05-05T15:05:15Z",
			currency: "SEK",
			amount: 100,
			card: {
				id: "1234abcd",
				reference: "abc-0123-def",
				scheme: "visa",
				iin: "12345678",
				last4: "9000",
				expires: [1, 20],
				type: "credit",
			},
			capture: [],
			refund: [],
		}
		expect(model.Authorization.is(authorization)).toBeTruthy()
	})
})
