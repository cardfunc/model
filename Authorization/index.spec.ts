import * as model from "../index"

describe("Authorization", () => {
	it("is", () => {
		const authorization: model.Authorization = {
			id: "10001",
			number: "test001",
			reference: "cab-0123-def",
			created: "2005-05-05T15:05:15Z",
			currency: "SEK",
			amount: 100,
			card: {
				id: "1234abcd",
				reference: "abc-0123-def",
				scheme: "visa",
				iin: "123456",
				last4: "9000",
				expires: [1, 20],
				type: "credit",
			},
			capture: [],
			refund: [],
		}
		expect(model.Authorization.is(authorization)).toBeTruthy()
	})
	it("verify", async () => {
		const token = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJjYXJkIiwiaWF0IjoxNTY5MjY1MzQ3MDk4LCJpZCI6InhMRmp6RWYzX3M0YyIsIm51bWJlciI6InRlc3QwMDEiLCJyZWZlcmVuY2UiOiJjY2ExODEyMS05YjZjLTRkYjQtODJhZS0yZjk5ZjkxNGM0YWQiLCJkZXNjcmlwdG9yIjoidGVzdCB0cmFuc2FjdGlvbiIsImlwIjoiODIuMjA5LjE0MC4xOTUiLCJjcmVhdGVkIjoiMjAxOS0wOS0yM1QxOTowMjoyNiswMDowMCIsImFtb3VudCI6MTMzNy40MiwiY3VycmVuY3kiOiJTRUsiLCJjYXJkIjp7ImlkIjoiT2l0cGl5ZE8iLCJzY2hlbWUiOiJ2aXNhIiwiaWluIjoiNDExMTExMTEiLCJsYXN0NCI6IjExMTEiLCJleHBpcmVzIjpbMSwyMF19LCJjYXB0dXJlIjpbXSwicmVmdW5kIjpbXX0.Zw-j7VnqnXehpfs7aLmhdrVBzQ2rNsRAvL7o_0Y-JmFPX-6H3MTjd_3UZBLxL9GBoTcOMIOa0OrtAFf0-kwzBzTmTBOpSs9ISjI6PupemmDz5ye9wqtNgu6XLRBSs2f-XaJ9ZhMOFPgmiko-_jhAoZ0ZM4rll9Secib5TwNfmaaVGySbSPUTHNkSc9NtZivsVQJr45SQ5Y_bhOKcjueSrj8Czp3Al7Z6jGVWwRfwgZmv_YkSumSO8yiORWzsrVBP_SyrvOwovxL0xYu9eGDAOf3xmimqCkZe9fI-dtCTvnNc_SSLaZSA4ev1BR04jnP0ruSBLqebHydDl6BBltx1xQ"
		const authorization = await model.Authorization.verify(token)
		expect(authorization).toEqual({
			iss: "card",
			iat: 1569265347098,
			id: "xLFjzEf3_s4c",
			number: "test001",
			reference: "cca18121-9b6c-4db4-82ae-2f99f914c4ad",
			descriptor: "test transaction",
			ip: "82.209.140.195",
			created: "2019-09-23T19:02:26+00:00",
			amount: 1337.42,
			currency: "SEK",
			card: {
				id: "OitpiydO",
				scheme: "visa",
				iin: "41111111",
				last4: "1111",
				expires: [
					1,
					20,
				]
			},
			capture: [],
			refund: [],
		})
	})
})
