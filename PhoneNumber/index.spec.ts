import { PhoneNumber } from "./index"

describe("service.ch3d2.api.model.PhoneNumber is", () => {
	it("service.ch3d2.api.model.PhoneNumber is", () => expect(PhoneNumber.is({ country: "46", number: "1234567890"})).toBeTruthy())
	it("service.ch3d2.api.model.PhoneNumber is not #1", () => expect(PhoneNumber.is({ country: "", number: "1234567890"})).toBeFalsy())
	it("service.ch3d2.api.model.PhoneNumber is not #2", () => expect(PhoneNumber.is({ country: "46", number: ""})).toBeFalsy())
	it("service.ch3d2.api.model.PhoneNumber is not #3", () => expect(PhoneNumber.is({number: "1234567890"})).toBeFalsy())
	it("service.ch3d2.api.model.PhoneNumber is not #4", () => expect(PhoneNumber.is({ country: "46"})).toBeFalsy())
	it("service.ch3d2.api.model.PhoneNumber is not #5", () => expect(PhoneNumber.is({ country: "1234", number: "1234567890"})).toBeFalsy())
	it("service.ch3d2.api.model.PhoneNumber is not #6", () => expect(PhoneNumber.is({ country: "46", number: "123456789012345"})).toBeFalsy())
})
