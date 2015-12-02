let evens = {
	[Symbol.iterator]() {
		let idx = -2 // assume 0 is the first even
		return {
			next() {
				idx = idx + 2
				return {
					done: false,
					value: idx
				}
			}
		}
	}
}

var odds = []

for (let n of evens if n < 100) {
	odds.push(n + 1)
}

console.log(odds)
