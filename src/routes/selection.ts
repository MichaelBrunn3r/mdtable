import {constrain} from './utils';

export class Position {
	x: number;
	y: number;

	constructor(x: number, y: number) {
		this.x = x;
		this.y = y;
	}
}

export class Selection {
	startPos: Position;
	endPos: Position;

	constructor(startRow: number, startColumn: number, endRow: number, endColumn: number) {
		this.startPos = new Position(startColumn, startRow);
		this.endPos = new Position(endColumn, endRow);
	}

	/**
	 * Collapses the selection into the starting position
	 */
	collapse() {
		this.endPos.x = this.startPos.x;
		this.endPos.y = this.startPos.y;
		return this;
	}

	/**
	 * Translates the selection by an amount of rows and columns
	 */
	translate(rows: number, columns: number) {
		this.startPos.x += columns;
		this.startPos.y += rows;
		this.endPos.x += columns;
		this.endPos.y += rows;
		return this;
	}

	/**
	 * Constrain the selection to be inside an area
	 */
	constrain(minRow: number, minColumn: number, maxRow: number, maxColumn: number) {
		this.startPos.x = constrain(this.startPos.x, minColumn, maxColumn);
		this.startPos.y = constrain(this.startPos.y, minRow, maxRow);
		this.endPos.x = constrain(this.endPos.x, minColumn, maxColumn);
		this.endPos.y = constrain(this.endPos.y, minRow, maxRow);
		return this;
	}

	setEndPos(rowIdx: number, columnIdx: number) {
		this.endPos = new Position(rowIdx, columnIdx);
		return this;
	}

	/**
	 * Predicate wether a cell is inside the selection
	 */
	contains(rowIdx: number, columnIdx: number) {
		if(columnIdx > this.startPos.x && columnIdx > this.endPos.x) return false;
		if(columnIdx < this.startPos.x && columnIdx < this.endPos.x) return false;
		if(rowIdx < this.startPos.y && rowIdx < this.endPos.y) return false;
		if(rowIdx > this.startPos.y && rowIdx > this.endPos.y) return false;

		return true;
	}

	/**
	 * Predicate wether a cell is at the top edge of the selection
	 */
	atTopEdge(rowIdx: number, columnIdx: number) {
		return this.contains(rowIdx, columnIdx) && rowIdx === Math.min(this.startPos.y, this.endPos.y);
	}

	/**
	 * Predicate wether a cell is at the bottom edge of the selection
	 */
	atBottomEdge(rowIdx: number, columnIdx: number) {
		return this.contains(rowIdx, columnIdx) && rowIdx === Math.max(this.startPos.y, this.endPos.y);
	}

	/**
	 * Predicate wether a cell is at the left edge of the selection
	 */
	atLeftEdge(rowIdx: number, columnIdx: number) {
		return this.contains(rowIdx, columnIdx) && columnIdx === Math.min(this.startPos.x, this.endPos.x);
	}

	/**
	 * Predicate wether a cell is at the right edge of the selection
	 */
	atRightEdge(rowIdx: number, columnIdx: number) {
		return this.contains(rowIdx, columnIdx) && columnIdx === Math.max(this.startPos.x, this.endPos.x);
	}
}