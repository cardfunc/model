import * as model from "../../index"

describe("Authorization.Creatable.Safe", () => {
	it("is", async () => {
		const authorization: model.Authorization.Creatable.Base = {
			number: "test001",
			currency: "SEK",
			amount: 100,
		}
		expect(model.Authorization.Creatable.Base.is(authorization)).toBeTruthy()
	})
})
