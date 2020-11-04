import * as model from "./index"

describe("Account", () => {
	it("verify production", async () =>
		expect(
			await model.Account.verify(
				"eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJDYXJkRnVuYyIsImlhdCI6MTU4MTU5ODU4MTM1NCwiYXVkIjoicHJvZHVjdGlvbiIsImlkIjoiUVlrbEdYX0sifQ.iyY_NTgzqHt1zJKmeEpm6yylWw1uLYLbW55KFMv7Q1z0hq90E9VfXhAgXbNQTQrj1ZNh1Xd_yQ6PMXQtT6CFMSAOsVCzvszk7r0_Big8yZSe8GjOIhpWdoyy55yPHDz5bh-9QffdDW_S3TGJGqwC9QBWRQXqJElKWJEY3nK1rfGFD-Ip7BY5MM3a4YpBeV6n2EIGtF4Rg5eM24WXuc9Kk1Buh-S2hwoXFV_pWu6zPWfSmWuIIOPiFE3w4FpzTu2yDvcE37R20yCYDD7P1tiA5rnNfy9CFFo5V-QlI_t3ybBOFf2_vRoKoT6Flm19fGJcRdWbulWXZQn9wQg2e654XA"
			)
		).toEqual({
			aud: "production",
			iat: 1581598581,
			id: "QYklGX_K",
			iss: "CardFunc",
			token:
				"eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJDYXJkRnVuYyIsImlhdCI6MTU4MTU5ODU4MTM1NCwiYXVkIjoicHJvZHVjdGlvbiIsImlkIjoiUVlrbEdYX0sifQ.iyY_NTgzqHt1zJKmeEpm6yylWw1uLYLbW55KFMv7Q1z0hq90E9VfXhAgXbNQTQrj1ZNh1Xd_yQ6PMXQtT6CFMSAOsVCzvszk7r0_Big8yZSe8GjOIhpWdoyy55yPHDz5bh-9QffdDW_S3TGJGqwC9QBWRQXqJElKWJEY3nK1rfGFD-Ip7BY5MM3a4YpBeV6n2EIGtF4Rg5eM24WXuc9Kk1Buh-S2hwoXFV_pWu6zPWfSmWuIIOPiFE3w4FpzTu2yDvcE37R20yCYDD7P1tiA5rnNfy9CFFo5V-QlI_t3ybBOFf2_vRoKoT6Flm19fGJcRdWbulWXZQn9wQg2e654XA",
		}))
})
