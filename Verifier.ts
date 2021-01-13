import * as authly from "authly"

const algorithms = {
	production: authly.Algorithm.RS256(
		"MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEArZFavKxpyvdY5hv1ZKegVXPfcoI0Tx4CIN7lAxdW80M9bROncr3tVngC48iWzbX/6ziw5xGwujXG/j1qSNIZlTOWx2imlWCl5doTSPb1yt0CX3pREdlBfR5RJGQHRhGpiQA51HO9wA9Y9OAq4kqaFcCkEpJeqvNjvXPJSTM97x4rksil63WalUFSjmWK6lEiQIo/cnLCi6l6MkSxYBZTwS6jGjGvBcYeNPwVHToRLl4Yz0KRdYFyMcO5wk9B6hQ+fA3rkhXezU0squlzPCBZnoyp2T+OqM/ztLuykVlQjVN5RNP89O02jcmsviYH3aRxtYmnaoRKlhXtBmiXmi873wIDAQAB"
	),
	development: authly.Algorithm.RS256(
		"MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAzWkKmoMsdU6TRKeMYFlwwRxb7uuA3Xh1zsya9m9QLcF7FhSLxsaDF7hHWmbBLsKBCDT35hl8mIxOssQGcq5CvhntAmI7RgWExs/VgtyJK1uRxgUKS7wCuWxlB3akXY4f2UXcFn+wOqBdhh1yep726MvB/Jh4nDusXb5G4evVJLIrMKc8vvLqmEo9x8wuXz5s6qvIlHf6h7KLICNsX0ZCv6Tf3OYbZlfd0us+gQTvqhk+dj6P2UaUlQmsEAOerLvSKWDa1KNe0i58/aoDgC9FZGCmpg1mtPegQ09IAVgCaqQ6zqA1wPIWiOO89pWWne28tRCNYGvNY0eXUSG6qXv5LQIDAQAB"
	),
}

export class Verifier<T extends authly.Payload> {
	private constructor(private backends: [string, authly.Verifier<T> | undefined][]) {}
	async verify(token: string | authly.Token | undefined): Promise<T | undefined> {
		return this.backends.map(async ([a, v]) => await v?.verify(token, a)).find(p => p)
	}
	add(...argument: (authly.Property.Transformer | undefined)[]): Verifier<T> {
		this.backends.forEach(([_, b]) => b?.add(...argument))
		return this
	}
	static create<T extends authly.Payload>(): Verifier<T> {
		return new Verifier(
			Object.entries(algorithms).map<[string, authly.Verifier<T> | undefined]>(([audience, algorithm]) => [
				audience,
				authly.Verifier.create<T>(algorithm),
			])
		)
	}
}
