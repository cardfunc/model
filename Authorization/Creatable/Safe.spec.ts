import * as model from "../../index"

describe("Authorization.Creatable.Safe", () => {
	it("is", async () => {
		const authorization: model.Authorization.Creatable.Safe = {
			number: "test001",
			currency: "SEK",
			amount: 100,
		}
		expect(model.Authorization.Creatable.Safe.is(authorization)).toBeTruthy()
	})
	it("is (with account)", async () => {
		const authorization: model.Authorization.Creatable.Safe = {
			number: "test001",
			currency: "SEK",
			amount: 100,
			account: "aaa.bbb.ccc",
		}
		expect(model.Authorization.Creatable.Safe.is(authorization)).toBeTruthy()
	})
	it("is (with card)", async () => {
		const authorization: model.Authorization.Creatable.Safe = {
			number: "test001",
			currency: "SEK",
			amount: 100,
			card: "aaa.bbb.ccc",
		}
		expect(model.Authorization.Creatable.Safe.is(authorization)).toBeTruthy()
	})
})
