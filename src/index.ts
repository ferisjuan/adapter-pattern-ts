import { RoundHole } from './business-logic/RoundHole'
import { RoundPeg } from './business-logic/RoundPeg'
import { SquarePeg } from './business-logic/SquarePeg'

const roundHole = new RoundHole(6)
const roundPeg = new RoundPeg(4)
const squarePeg = new SquarePeg(5)

console.log(
	roundHole.radius,
	roundPeg.radius,
	squarePeg.width,
	roundHole.fits(roundPeg)
)
