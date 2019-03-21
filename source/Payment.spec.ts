import { Payment } from "./Payment"

describe("Payment", () => {
	it("is", async () => {
		const payment: Payment = {
			id: 10001,
			created: "2005-05-05 15:05:15",
			psp: 100001,
			merchant: 100001,
			amount: 100,
			currency: "SEK",
			language: "en",
			reference: "1337",
			description: "A test.",
			method: "card",
			account: 12345,
			order: "test",
			timeout: 30,
		}
		expect(Payment.is(payment)).toBeTruthy()
	})
})
