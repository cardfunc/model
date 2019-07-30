import * as model from ".."

describe("Authorization.Creatable", () => {
	it("is", async () => {
		const authorization: model.Authorization.Creatable = {
			number: "test001",
			currency: "SEK",
			amount: 100,
			card: {
				pan: "123456789000",
				expires: [10, 20],
				csc: "123",
			},
		}
		expect(model.Authorization.Creatable.is(authorization)).toBeTruthy()
	})
})
