import * as model from "../dist"

describe("Merchant", () => {
	it("is", () => expect(model.Merchant.is({ name: "Merchant Ltd.", country: "GB", acquirer: { protocol: "clearhaus", url: "https://example.com/", key: "secret-api-key" }})).toBeTruthy())
	it("is missing name", () => expect(model.Merchant.is({ country: "GB", acquirer: { protocol: "clearhaus", url: "https://example.com/", key: "secret-api-key" }})).toBeFalsy())
})
