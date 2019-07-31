import * as model from "../dist"

describe("Merchant", () => {
	it("is", () => expect(model.Merchant.is({ id: "123", name: "Merchant Ltd.", country: "GB", acquirer: { protocol: "clearhaus", url: "https://example.com/", key: "secret-api-key" }, user: [] })).toBeTruthy())
	it("is missing id name user", () => expect(model.Merchant.is({ country: "GB", acquirer: { protocol: "clearhaus", url: "https://example.com/", key: "secret-api-key" }})).toBeFalsy())
})
