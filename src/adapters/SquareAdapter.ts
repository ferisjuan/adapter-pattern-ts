import { RoundPeg } from '../business-logic/RoundPeg'
import { SquarePeg } from '../business-logic/SquarePeg'

export class SquareAdapter extends RoundPeg {
	constructor(private peg: SquarePeg) {
		super(peg.width)
	}

	get radius() {
		// Use the geometric formula for the square's diagonal
		return (this.peg.width * Math.sqrt(2)) / 2
	}
}
