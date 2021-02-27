export default function primitiveSample() {
	const name = 'chanmako'
	console.log(typeof name, name)

	const age = 24
	console.log(typeof age, age)

	const isSingle = true
	console.log(typeof isSingle, isSingle)

	const isOver20: boolean = age >= 20
	console.log(typeof isOver20)
}
