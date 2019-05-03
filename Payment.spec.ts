import { Payment } from "./Payment"

describe("Payment", () => {
	it("is", async () => {
		const payment: Payment = {
			id: 10001,
			created: "2005-05-05T15:05:15Z",
			status: "created",
			psp: 100001,
			merchant: 100001,
			method: "card",
			session: "oaeuhtsn",
			account: 12345,
			currency: "SEK",
			amount: 100,
			order: "test",
			reference: "1337",
			description: "A test.",
			timeout: 30,
		}
		expect(Payment.is(payment)).toBeTruthy()
	})
})
