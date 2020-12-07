class CellPosition {
	rowIdx: number;
	columnIdx: number;

	constructor(rowIdx: number, columnIdx: number) {
		this.rowIdx = rowIdx;
		this.columnIdx = columnIdx;
	}
}

class Selection {
	startPos: CellPosition;
	endPos: CellPosition;

	constructor(startRow: number, startColumn: number, endRow: number, endColumn: number) {
		this.startPos = new CellPosition(startRow, startColumn);
		this.endPos = new CellPosition(endRow, endColumn);
	}

	/**
	 * Predicate wether a cell is inside the selection
	 */
	contains(rowIdx: number, columnIdx: number) {
		if(rowIdx < this.startPos.rowIdx && rowIdx < this.endPos.rowIdx) return false;
		if(rowIdx > this.startPos.rowIdx && rowIdx > this.endPos.rowIdx) return false;
		if(columnIdx > this.startPos.columnIdx && columnIdx > this.endPos.columnIdx) return false;
		if(columnIdx < this.startPos.columnIdx && columnIdx < this.endPos.columnIdx) return false;

		return true;
	}

	/**
	 * Predicate wether a cell is at the top edge of the selection
	 */
	atTopEdge(rowIdx: number, columnIdx: number) {
		return this.contains(rowIdx, columnIdx) && rowIdx === Math.min(this.startPos.rowIdx, this.endPos.rowIdx);
	}

	/**
	 * Predicate wether a cell is at the bottom edge of the selection
	 */
	atBottomEdge(rowIdx: number, columnIdx: number) {
		return this.contains(rowIdx, columnIdx) && rowIdx === Math.max(this.startPos.rowIdx, this.endPos.rowIdx);
	}

	/**
	 * Predicate wether a cell is at the left edge of the selection
	 */
	atLeftEdge(rowIdx: number, columnIdx: number) {
		return this.contains(rowIdx, columnIdx) && columnIdx === Math.min(this.startPos.columnIdx, this.endPos.columnIdx);
	}

	/**
	 * Predicate wether a cell is at the right edge of the selection
	 */
	atRightEdge(rowIdx: number, columnIdx: number) {
		return this.contains(rowIdx, columnIdx) && columnIdx === Math.max(this.startPos.columnIdx, this.endPos.columnIdx);
	}
}

export {
	CellPosition,
	Selection
}