import * as model from "../../index"

describe("Authorization.Creatable", () => {
	it("is normal", async () => {
		const authorization: model.Authorization.Creatable = {
			number: "test001",
			currency: "SEK",
			amount: 100,
			card: {
				pan: "123456789000",
				expires: [10, 20],
				csc: "123",
			},
		}
		expect(model.Authorization.Creatable.is(authorization)).toBeTruthy()
	})
	it("is account", async () => {
		const authorization: model.Authorization.Creatable = {
			number: "axb02",
			descriptor: "A test transaction",
			amount: 1337.42,
			currency: "SEK",
			account:
				"eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJDYXJkRnVuYyIsImlhdCI6MTU4MDk4OTgwMDIzNywiaWQiOiJhYTNFeS1NRSJ9.I1LzJbz0SQ7l4iugi5MsKqGFUx_6nh-vR9dqOt8w0LwWHCkzMffGT4oEo2Dram-teeL8hG4Ere9LoVvT9Q0-vv_Wmmx8f5PwoKolJLjUcNmKykJ4WVn2L6NqPSmEv1nfm31yDnHE0Pw3OJGESuPS11khB28ixISjOze7-jd9V4Hd1uJr70NNo0MIVMSDxfPSwpFEwmL3QZl4vGHXeCandbZsbULm_Tbp-d-gHgPI1CeNQ8pBxasOsOnSYYr4xIZ6UCedM3Me1NW8BHxX1HS5OXhN0IwyyOuBCSqmtmwjHv9EAafcx2C9dhaJRRc-Rz8w0FjTTucMeYXk6OYWYQkEwg",
		}
		expect(model.Authorization.Creatable.is(authorization)).toBeTruthy()
	})
})
