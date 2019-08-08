import * as model from "../"

describe("Acquirer.Settings", () => {
	it("is", () => expect(model.Acquirer.Settings.is({ protocol: "clearhaus", url: "https://example.com/", key: "secret-api-key" })).toBeTruthy())
	it("is missing name", () => expect(model.Acquirer.Settings.is({ protocol: "not-valid", url: "https://example.com/", key: "secret-api-key" })).toBeFalsy())
})