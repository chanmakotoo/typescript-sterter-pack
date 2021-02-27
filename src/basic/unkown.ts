export default function unkownSample() {
	const maybeNumber: unknown = 10
	console.log(typeof maybeNumber, maybeNumber)

	if (typeof maybeNumber === 'number') {
		const sum = maybeNumber + 10
		console.log(typeof sum, sum)
	}
}
