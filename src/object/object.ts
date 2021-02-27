export default function objectSample() {
	const a = {
		name: 'chanmako',
		age: 24,
	}
	//オブジェクトリテラル記法で型定義
	let country: {
		lang: string
		name: string
	} = {
		lang: 'ja',
		name: 'japan',
	}
	console.log('object object sample 1:', country)

	country = {
		lang: 'en',
		name: 'usa',
	}
	console.log('object object sample 2:', country)

	//オプショナルとreadonly
	const chanmako: {
		age: number
		lastName: string
		readonly firstName: string
		gender?: string
	} = {
		age: 28,
		lastName: 'chan',
		firstName: 'mako',
	}

	chanmako.gender = 'male'
	chanmako.lastName = 'chun'
	// chanmako.firstName = "makoto"
	console.log('object object sample 3:', chanmako)

	//インデックスシグネチャ
	const capitals: {
		[countryName: string]: string
	} = {
		Japan: 'Tokyo',
	}

	capitals.Canada = 'Ottawa'
	console.log('object object sample 4:', capitals)
}
