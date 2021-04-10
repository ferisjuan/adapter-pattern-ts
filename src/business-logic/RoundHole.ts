import { RoundPeg } from './RoundPeg'

export class RoundHole {
	constructor(private _radius: number) {}

	get radius() {
		return this._radius
	}

	public fits(peg: RoundPeg) {
		return this.radius >= peg.radius
	}
}
