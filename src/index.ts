import { SquareAdapter } from './adapters/SquareAdapter'
import { RoundHole } from './business-logic/RoundHole'
import { RoundPeg } from './business-logic/RoundPeg'
import { SquarePeg } from './business-logic/SquarePeg'

const roundHole = new RoundHole(6)
const roundPeg = new RoundPeg(4)
const shortSquarePeg = new SquarePeg(5)
const longSquarePeg = new SquarePeg(10)
const shortSquareAdapter = new SquareAdapter(shortSquarePeg)
const longSquareAdapter = new SquareAdapter(longSquarePeg)

const results = [
	{ radius: roundPeg.radius, fit: roundHole.fits(roundPeg) },
	{ radius: shortSquarePeg.width, fit: roundHole.fits(shortSquareAdapter) },
	{ radius: longSquarePeg.width, fit: roundHole.fits(longSquareAdapter) },
]
console.log(`%cThe hole diameter is ${roundHole.radius}.`)
console.table(results)
