import * as model from "../index"

describe("Acquirer.Settings", () => {
	it("is", () => expect(model.Acquirer.is({ protocol: "clearhaus", url: "https://example.com/", key: "secret-api-key" })).toBeTruthy())
	it("is missing name", () => expect(model.Acquirer.is({ protocol: "not-valid", url: "https://example.com/", key: "secret-api-key" })).toBeFalsy())
})
