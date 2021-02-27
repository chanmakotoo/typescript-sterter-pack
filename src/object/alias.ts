export default function typeAliasSample() {
	//型エイリアス
	type Country = {
		capital: string
		lang: string
		name: string
	}

	const japan: Country = {
		capital: 'tokyo',
		lang: 'ja',
		name: 'japan',
	}
	console.log('Object alias sample:1', japan)

	const usa: Country = {
		capital: 'washington',
		lang: 'en',
		name: 'usa',
	}
	console.log('Object alias sample:2', usa)

	//合併型(union)と交差型(intersection)
	type knight = {
		hp: number
		sp: number
		weapon: string
		sowrdSkill: string
	}

	type wizard = {
		hp: number
		mp: number
		weapon: string
		magicSkill: string
	}

	//合併型 knightまたはwizardの型を持つ
	type adv = knight | wizard

	//交差型 knightかつwizardの型を持つ
	type paladin = knight & wizard

	const adv1: adv = {
		hp: 100,
		sp: 30,
		weapon: '木の剣',
		sowrdSkill: '三連斬り',
	}

	const adv2: adv = {
		hp: 100,
		mp: 30,
		weapon: '木の杖',
		magicSkill: 'ファイアボール',
	}
	console.log('Object alias sample:3', adv1)
	console.log('Object alias sample:4', adv2)

	const paladin: paladin = {
		hp: 300,
		sp: 100,
		mp: 100,
		weapon: '銀の剣',
		sowrdSkill: '三連斬り',
		magicSkill: 'ファイアボール',
	}
	console.log('Object alias sample:5', paladin)
}
