import {constrain} from './utils';

export class Position {
	x: number;
	y: number;

	constructor(x: number, y: number) {
		this.x = x;
		this.y = y;
	}
}

export class Rect {
	startPos: Position;
	endPos: Position;

	constructor(x1: number, y1: number, x2: number, y2: number) {
		this.startPos = new Position(x1, y1);
		this.endPos = new Position(x2, y2);
	}

	/**
	 * Collapses the rect into the starting position
	 */
	collapse() {
		this.endPos.x = this.startPos.x;
		this.endPos.y = this.startPos.y;
		return this;
	}

	/**
	 * Translates the rect by an amount of rows and columns
	 */
	translate(x: number, y: number) {
		this.startPos.x += x;
		this.startPos.y += y;
		this.endPos.x += x;
		this.endPos.y += y;
		return this;
	}

	/**
	 * Constrain the rect to be inside an area
	 */
	constrain(x1: number, y1: number, x2: number, y2: number) {
		this.startPos.x = constrain(this.startPos.x, x1, x2);
		this.startPos.y = constrain(this.startPos.y, y1, y2);
		this.endPos.x = constrain(this.endPos.x, x1, x2);
		this.endPos.y = constrain(this.endPos.y, y1, y2);
		return this;
	}

	constrainToRect(rect: Rect) {
		this.startPos.x = constrain(this.startPos.x, rect.startPos.x, rect.endPos.x);
		this.startPos.y = constrain(this.startPos.y, rect.startPos.y, rect.endPos.y);
		this.endPos.x = constrain(this.endPos.x, rect.startPos.x, rect.endPos.x);
		this.endPos.y = constrain(this.endPos.y,rect.startPos.y, rect.endPos.y);
		return this;
	}

	setEndPos(x: number, y: number) {
		this.endPos = new Position(x, y);
		return this;
	}

	/**
	 * Predicate wether a position is inside the rect
	 */
	contains(x: number, y: number) {
		if(x > this.startPos.x && x > this.endPos.x) return false;
		if(x < this.startPos.x && x < this.endPos.x) return false;
		if(y < this.startPos.y && y < this.endPos.y) return false;
		if(y > this.startPos.y && y > this.endPos.y) return false;

		return true;
	}

	/**
	 * Predicate wether a position is at the top edge of the rect
	 */
	atTopEdge(x: number, y: number) {
		return this.contains(x, y) && y === Math.min(this.startPos.y, this.endPos.y);
	}

	/**
	 * Predicate wether a position is at the bottom edge of the rect
	 */
	atBottomEdge(x: number, y: number) {
		return this.contains(x, y) && y === Math.max(this.startPos.y, this.endPos.y);
	}

	/**
	 * Predicate wether a position is at the left edge of the rect
	 */
	atLeftEdge(x: number, y: number) {
		return this.contains(x, y) && x === Math.min(this.startPos.x, this.endPos.x);
	}

	/**
	 * Predicate wether a position is at the right edge of the rect
	 */
	atRightEdge(x: number, y: number) {
		return this.contains(x, y) && x === Math.max(this.startPos.x, this.endPos.x);
	}
}