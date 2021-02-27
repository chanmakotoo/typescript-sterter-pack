export default function notExistSample() {
	const name = null
	console.log(typeof name, name)

	if (!name) {
		console.log(name)
	}

	const age = undefined
	console.log(age)
}
