import * as model from "../../index"

describe("Key", () => {
	const key: model.Merchant.Key = {
		aud: "public",
		card: {
			url: "http://localhost:7082",
			id: "test",
			acquirer: {
				protocol: "clearhaus",
				url: "https://gateway.test.clearhaus.com",
				key: "123456-123456-123456",
			},
			country: "SE",
			emv3d: {
				protocol: "ch3d1",
				url: "http://localhost:7082/ch3d1sim",
				key: "no-key",
			},
			mcc: "1234",
			mid: "1234",
		},
		iat: 1583504003495,
		iss: "http://localhost:7082",
		name: "Test AB",
		sub: "test",
		url: "http://example.com",
	}
	const testKeys = {
		payfunc: {
			V1: {
				public:
					"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjcwNzEiLCJpYXQiOjE1ODM1MDQwNjUzMzAsImF1ZCI6InB1YmxpYyIsInN1YiI6InRlc3R0ZXN0IiwiYWdlbnQiOiJ0ZXN0IiwidHlwZSI6InRlc3QiLCJpZCI6InRlc3R0ZXN0IiwibmFtZSI6IlRlc3QgQUIiLCJvcHRpb24iOnsiY2FyZCI6ImV5SmhiR2NpT2lKSVV6STFOaUlzSW5SNWNDSTZJa3BYVkNKOS5leUpwYzNNaU9pSm9kSFJ3T2k4dmJHOWpZV3hvYjNOME9qY3dPRElpTENKcFlYUWlPakUxT0RNMU1EUXdNRE0wT1RVc0ltRjFaQ0k2SW5CMVlteHBZeUlzSW5OMVlpSTZJblJsYzNRaUxDSmhaMlZ1ZENJNkluUmxjM1FpTENKMGVYQmxJam9pZEdWemRDSXNJbWxrSWpvaWRHVnpkQ0lzSW01aGJXVWlPaUpVWlhOMElFRkNJaXdpZFhKc0lqb2lhSFIwY0RvdkwyVjRZVzF3YkdVdVkyOXRJaXdpWkdWelkzSnBjSFJ2Y2lJNkluUmxjM1FnZEhKaGJuTmhZM1JwYjI0aUxDSmpiM1Z1ZEhKNUlqb2lVMFVpTENKaFkzRjFhWEpsY2lJNklsaHBVM2RtUlZwdk9VeHhNSEJMYlVsSVEyaDBVWFJyVjNOVGVHTnRMVlJvT1dOMVh6TlBiMUZCZDNoWmRVOXFkVWcwVmsxaFl5MVBkV3M1ZG5oT0xVTnFSekJZZGkxalYycHhiR1pWVm10clJsQjNNblV5TUdsTVEwcHlXbGhyYVU5cFNYcE9iVlV6VGtkRk1rOVRNRE5hYlZac1RGUlNhRTE2WTNSWmJVNXJUMU13TWxsVVJUQk5ha2wzVFdwb2JWcHFUV2xNUTBwcFlWYzBhVTl1YzJsa2JXeDZXVk5KTmtscVVYcFBSRTEzVDFOSmMwbHRNV2hqTTFKc1kyMU9hR050VVdsUGFVa3hUV3BaTVU1NlJXbG1XREFpTENKdGFXUWlPaUl4TWpNMElpd2liV05qSWpvaU1USXpOQ0lzSW1WdGRqTmtJam9pUzJWSGJubzNOMVV0TFdFNU5tZzVWSEZpU2tWV0xWbFBkMGhsTjB0dGIzSTJNa2RTZVhsRFpETm1hVTVUTWpCdFUwSmZha1k0ZFVaR09HNWhUVWhCVWpGM09HMVBWbmhtTVhsU1FVcGtlbU15VDJob04xUnZhV0p0T0hSaE1sWTFTVzR3SW4wLjhxaW1tTHUtdTFFRWxSb0pDVUtFVmlRUm5wMTRCRlUzM2V5aXl3N0RNR1EifX0.M2eKOCsNXgBSiVZ5pkCdpfahf_ABM5KIR61Vf75dIc4",
				private:
					"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjcwNzEiLCJpYXQiOjE1ODM1MDQwNjUzMjYsImF1ZCI6WyJwcml2YXRlIiwicHVibGljIl0sInN1YiI6InRlc3R0ZXN0IiwiYWdlbnQiOiJ0ZXN0IiwidHlwZSI6InRlc3QiLCJpZCI6InRlc3R0ZXN0IiwibmFtZSI6IlRlc3QgQUIiLCJvcHRpb24iOnsiY2FyZCI6ImV5SmhiR2NpT2lKSVV6STFOaUlzSW5SNWNDSTZJa3BYVkNKOS5leUpwYzNNaU9pSm9kSFJ3T2k4dmJHOWpZV3hvYjNOME9qY3dPRElpTENKcFlYUWlPakUxT0RNMU1ETTNNekE1TnpBc0ltRjFaQ0k2SW5CeWFYWmhkR1VpTENKemRXSWlPaUowWlhOMElpd2lZV2RsYm5RaU9pSjBaWE4wSWl3aWRIbHdaU0k2SW5SbGMzUWlMQ0pwWkNJNkluUmxjM1FpTENKdVlXMWxJam9pVkdWemRDQkJRaUlzSW5WeWJDSTZJbWgwZEhBNkx5OWxlR0Z0Y0d4bExtTnZiU0lzSW1SbGMyTnlhWEIwYjNJaU9pSjBaWE4wSUhSeVlXNXpZV04wYVc5dUlpd2lZMjkxYm5SeWVTSTZJbE5GSWl3aVlXTnhkV2x5WlhJaU9pSktkVnBZZDJzd1kyeHpjbkJNTkdnMVREaHFjVFZzTFRoeldERkdaWGRNV25Cc2FsTktObEpJVHpjd1dHTllVMmQwTVhkQ2VuUkhVbEpvVVRGM1dXOHpSVXBUWjJKNlEwWmhURmt3VldwbWFERjFhR05NUnpCcFRFTktjbHBZYTJsUGFVbDZUbTFWTTA1SFJUSlBVekF6V20xV2JFeFVVbWhOZW1OMFdXMU9hMDlUTURKWlZFVXdUV3BKZDAxcWFHMWFhazFwVEVOS2FXRlhOR2xQYm5OcFpHMXNlbGxUU1RaSmFsRjZUMFJOZDA5VFNYTkpiVEZvWXpOU2JHTnRUbWhqYlZGcFQybEpNVTFxV1RGT2VrVnBabGd3SWl3aWJXbGtJam9pTVRJek5DSXNJbTFqWXlJNklqRXlNelFpTENKbGJYWXpaQ0k2SWxGUWJEbGFjemR0ZW1SRE1VbEJMVnBMZDFCUVluUlNPUzAxVmpsZllVSlljVFIyVlU1ak4xaG5iRXRMT1RsTVEwSTJVMEZuZVVodmNXRlRVMUkyVkc1NlgyZDRNVnBLTm1NNFgydEhUMVZOVUZSWWNuSnFiMmxpYlRoMFlUSldOVWx1TUNKOS5VNEhwZmN1cGw3dGdqay1JVmFZQ2VtenVOc0cxNUVaWTFJeE5nRWR0MDJzIn19.nH_tNRiHHq-Eu-x8sH3WQOEVK-j3BV8tL4jSRmLIiGM",
			},
			public:
				"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjcwNzEiLCJpYXQiOjE1OTQxMjA5OTY4MjIsInN1YiI6InRlc3R0ZXN0IiwibmFtZSI6InRlc3R0ZXN0IiwidXJsIjoid3d3LmV4YW1wbGUuY29tIiwiY2FyZCI6eyJhY3F1aXJlciI6IjFuUTR3UVQ0ZVdlNmZ3TFhoUHBkY1BwZ3BCWjhTY2kySWJvMTE2cXVXdmxjNUM3ell5bEJtQ0Zzb2d6MlNjaWRQdTE4SzNvVlZyVTVJalZtWk1SMUcyWmxaUzAwWVRNM0xXSmpaRGt0Tm1FeE5ESXlNREk0Wm1Zeklpd2ljSEp2ZEc5amIyd2lPaUpqYkdWaGNtaGhkWE1pTENKMWNtd2lPaUpvZEhSd2N6b3ZMMmRoZEdWM1lYa3VkR1Z6ZEM1amJHVmhjbWhoZFhNdVkyOXRJbjAiLCJjb3VudHJ5IjoiU0UiLCJkZXNjcmlwdG9yIjoidGVzdCB0cmFuc2FjdGlvbiIsImVtdjNkIjoiUVJseTlSVTljWmViR3lnbURCLUNSYUNiVzdXY045aGNuRFB1MUk3VlhfbHZmSUFYdmtPX2puVmhkODUxc1ZmNTQ2dHZfRXZGZkdvVURGcHd0c3dFVWpvaWJtOHRhMlY1SW4wIiwiaWQiOiJ0ZXN0IiwibWNjIjoiMTIzNCIsIm1pZCI6IjEyMzQiLCJ1cmwiOiJodHRwOi8vbG9jYWxob3N0OjcwODIifSwiYXVkIjoicHVibGljIn0.64kv_qm_By5NawudPRYt20Yy7jOGou_ukKAI49gP3wc",
			private:
				"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjcwNzEiLCJpYXQiOjE1OTQxMjA5OTY4MTcsInN1YiI6InRlc3R0ZXN0IiwibmFtZSI6InRlc3R0ZXN0IiwidXJsIjoid3d3LmV4YW1wbGUuY29tIiwiY2FyZCI6eyJhY3F1aXJlciI6InlZcUNuWlBZLWlMOHc5cFMyWG1lT1l1Qkp2WHZRQVlQY1BVSVNTUkpSZXYxUGNrM09CYXptcVFIZWJFZVo0TElGaGtrMkdPRy15bFl4WHU2LVEwWDRHWmxaUzAwWVRNM0xXSmpaRGt0Tm1FeE5ESXlNREk0Wm1Zeklpd2ljSEp2ZEc5amIyd2lPaUpqYkdWaGNtaGhkWE1pTENKMWNtd2lPaUpvZEhSd2N6b3ZMMmRoZEdWM1lYa3VkR1Z6ZEM1amJHVmhjbWhoZFhNdVkyOXRJbjAiLCJjb3VudHJ5IjoiU0UiLCJkZXNjcmlwdG9yIjoidGVzdCB0cmFuc2FjdGlvbiIsImVtdjNkIjoiOUFHaDZ2Q3RoYlZDVVFGRG42SVJySm94VmVkVV9iWDg4aUxKTnNCVmNWendTNVJkSDhpOXh2cGlTeUJaU3JVdF9ZcTA0MEl5OEVJcnRHNnlCREkxNVRvaWJtOHRhMlY1SW4wIiwiaWQiOiJ0ZXN0IiwibWNjIjoiMTIzNCIsIm1pZCI6IjEyMzQiLCJ1cmwiOiJodHRwOi8vbG9jYWxob3N0OjcwODIifSwiYXVkIjoicHJpdmF0ZSJ9.IY55caKgc38GFDcBQ-YyYT29hgX9mr9ldD56kCrLYKc",
		},
		cardfunc: {
			V1: {
				public:
					"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjcwODIiLCJpYXQiOjE1ODM1MDQwMDM0OTUsImF1ZCI6InB1YmxpYyIsInN1YiI6InRlc3QiLCJhZ2VudCI6InRlc3QiLCJ0eXBlIjoidGVzdCIsImlkIjoidGVzdCIsIm5hbWUiOiJUZXN0IEFCIiwidXJsIjoiaHR0cDovL2V4YW1wbGUuY29tIiwiZGVzY3JpcHRvciI6InRlc3QgdHJhbnNhY3Rpb24iLCJjb3VudHJ5IjoiU0UiLCJhY3F1aXJlciI6IlhpU3dmRVpvOUxxMHBLbUlIQ2h0UXRrV3NTeGNtLVRoOWN1XzNPb1FBd3hZdU9qdUg0Vk1hYy1PdWs5dnhOLUNqRzBYdi1jV2pxbGZVVmtrRlB3MnUyMGlMQ0pyWlhraU9pSXpObVUzTkdFMk9TMDNabVZsTFRSaE16Y3RZbU5rT1MwMllURTBNakl3TWpobVpqTWlMQ0ppYVc0aU9uc2lkbWx6WVNJNklqUXpPRE13T1NJc0ltMWhjM1JsY21OaGNtUWlPaUkxTWpZMU56RWlmWDAiLCJtaWQiOiIxMjM0IiwibWNjIjoiMTIzNCIsImVtdjNkIjoiS2VHbno3N1UtLWE5Nmg5VHFiSkVWLVlPd0hlN0ttb3I2MkdSeXlDZDNmaU5TMjBtU0JfakY4dUZGOG5hTUhBUjF3OG1PVnhmMXlSQUpkemMyT2hoN1RvaWJtOHRhMlY1SW4wIn0.8qimmLu-u1EElRoJCUKEViQRnp14BFU33eyiyw7DMGQ",
				private:
					"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjcwODIiLCJpYXQiOjE1ODM1MDM3MzA5NzAsImF1ZCI6InByaXZhdGUiLCJzdWIiOiJ0ZXN0IiwiYWdlbnQiOiJ0ZXN0IiwidHlwZSI6InRlc3QiLCJpZCI6InRlc3QiLCJuYW1lIjoiVGVzdCBBQiIsInVybCI6Imh0dHA6Ly9leGFtcGxlLmNvbSIsImRlc2NyaXB0b3IiOiJ0ZXN0IHRyYW5zYWN0aW9uIiwiY291bnRyeSI6IlNFIiwiYWNxdWlyZXIiOiJKdVpYd2swY2xzcnBMNGg1TDhqcTVsLThzWDFGZXdMWnBsalNKNlJITzcwWGNYU2d0MXdCenRHUlJoUTF3WW8zRUpTZ2J6Q0ZhTFkwVWpmaDF1aGNMRzBpTENKclpYa2lPaUl6Tm1VM05HRTJPUzAzWm1WbExUUmhNemN0WW1Oa09TMDJZVEUwTWpJd01qaG1aak1pTENKaWFXNGlPbnNpZG1sellTSTZJalF6T0RNd09TSXNJbTFoYzNSbGNtTmhjbVFpT2lJMU1qWTFOekVpZlgwIiwibWlkIjoiMTIzNCIsIm1jYyI6IjEyMzQiLCJlbXYzZCI6IlFQbDlaczdtemRDMUlBLVpLd1BQYnRSOS01VjlfYUJYcTR2VU5jN1hnbEtLOTlMQ0I2U0FneUhvcWFTU1I2VG56X2d4MVpKNmM4X2tHT1VNUFRYcnJqb2libTh0YTJWNUluMCJ9.U4Hpfcupl7tgjk-IVaYCemzuNsG15EZY1IxNgEdt02s",
			},
		},
	}
	it("is", () => expect(model.Merchant.Key.is(key)).toBeTruthy())
	it("is with ch3d1 & ch3d2", () => {
		expect(
			model.Merchant.Key.is({
				...key,
				card: {
					...key.card,
					emv3d: [
						key.card.emv3d,
						{ protocol: "ch3d2", url: "https://service.sandbox.3dsecure.io", key: "123456-1234-123456" },
					],
				},
			})
		).toBeTruthy()
	})
	it("is missing id name", () =>
		expect(
			model.Merchant.Key.is({
				country: "GB",
				acquirer: {
					protocol: "clearhaus",
					url: "https://example.com/",
					key: "secret-api-key",
					bin: { visa: "1234", mastercard: "54321" },
				},
				mcc: "1234",
			})
		).toBeFalsy())
	it("flaw", () => {
		expect(model.Merchant.Key.flaw(key)).toEqual({
			flaws: [],
			type: "model.Merchant.Key",
		})
	})
	it("extractCardUrl payfunc V1 Keys", async () => {
		expect(
			(await model.Merchant.Key.extractCardUrl(testKeys.payfunc.V1.private, "private")) == "http://localhost:7082"
		).toBeTruthy()
		expect(
			(await model.Merchant.Key.extractCardUrl(testKeys.payfunc.V1.private, "public")) == "http://localhost:7082"
		).toBeFalsy()
		expect(
			(await model.Merchant.Key.extractCardUrl(testKeys.payfunc.V1.public, "private")) == "http://localhost:7082"
		).toBeFalsy()
		expect(
			(await model.Merchant.Key.extractCardUrl(testKeys.payfunc.V1.public, "public")) == "http://localhost:7082"
		).toBeTruthy()
	})
	it("extractCardUrl payfunc Keys", async () => {
		expect(
			(await model.Merchant.Key.extractCardUrl(testKeys.payfunc.private, "private")) == "http://localhost:7082"
		).toBeTruthy()
		expect(
			(await model.Merchant.Key.extractCardUrl(testKeys.payfunc.private, "public")) == "http://localhost:7082"
		).toBeFalsy()
		expect(
			(await model.Merchant.Key.extractCardUrl(testKeys.payfunc.public, "private")) == "http://localhost:7082"
		).toBeFalsy()
		expect(
			(await model.Merchant.Key.extractCardUrl(testKeys.payfunc.public, "public")) == "http://localhost:7082"
		).toBeTruthy()
	})
	it("extractCardUrl cardfunc V1 Keys", async () => {
		expect(
			(await model.Merchant.Key.extractCardUrl(testKeys.cardfunc.V1.private, "private")) == "http://localhost:7082"
		).toBeTruthy()
		expect(
			(await model.Merchant.Key.extractCardUrl(testKeys.cardfunc.V1.private, "public")) == "http://localhost:7082"
		).toBeFalsy()
		expect(
			(await model.Merchant.Key.extractCardUrl(testKeys.cardfunc.V1.public, "private")) == "http://localhost:7082"
		).toBeFalsy()
		expect(
			(await model.Merchant.Key.extractCardUrl(testKeys.cardfunc.V1.public, "public")) == "http://localhost:7082"
		).toBeTruthy()
	})
})
