import { PhoneNumber } from "./index"

describe("model.PhoneNumber is", () => {
	it("model.PhoneNumber is", () => expect(PhoneNumber.is({ country: "46", number: "1234567890"})).toBeTruthy())
	it("model.PhoneNumber is not #1", () => expect(PhoneNumber.is({ country: "", number: "1234567890"})).toBeFalsy())
	it("model.PhoneNumber is not #2", () => expect(PhoneNumber.is({ country: "46", number: ""})).toBeFalsy())
	it("model.PhoneNumber is not #3", () => expect(PhoneNumber.is({number: "1234567890"})).toBeFalsy())
	it("model.PhoneNumber is not #4", () => expect(PhoneNumber.is({ country: "46"})).toBeFalsy())
	it("model.PhoneNumber is not #5", () => expect(PhoneNumber.is({ country: "1234", number: "1234567890"})).toBeFalsy())
	it("model.PhoneNumber is not #6", () => expect(PhoneNumber.is({ country: "46", number: "123456789012345"})).toBeFalsy())
})
