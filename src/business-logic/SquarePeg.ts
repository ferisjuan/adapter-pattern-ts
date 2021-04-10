// Needs an adapter in order to work with the other classes

export class SquarePeg {
	constructor(private _width: number) {}

	get width() {
		return this._width
	}
}
