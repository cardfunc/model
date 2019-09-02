import * as model from "../../index"

describe("Authorization.Creatable.Safe", () => {
	it("is", async () => {
		const authorization: model.Authorization.Creatable = {
			number: "test001",
			currency: "SEK",
			amount: 100,
		}
		expect(model.Authorization.Creatable.Safe.is(authorization)).toBeTruthy()
	})
})
