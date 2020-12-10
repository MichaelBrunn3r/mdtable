import { writable, derived, get, Writable } from 'svelte/store';
import { Position, Rect } from './geometry';
import { tableStore, Table } from './table-store';

export class Selection extends Rect {
	isActive: boolean = false

	constructor() {
		super(-1,-1,-1,-1);
		this.reset();
	}

	reset() {
		this.isActive = false;
		this.startPos = new Position(-1,-1);
		this.endPos = new Position(-1,-1);
		return this;
	}

	focusedCell() {
		return this.startPos;
	}

	selectRow(rowIdx: number) {
		this.isActive = true;
		this.startPos = new Position(0, rowIdx);
		this.endPos = new Position(tableStore.get().numColumns-1, rowIdx);
		return this;
	}

	selectColumn(columnIdx: number) {
		this.isActive = true;
		this.startPos = new Position(columnIdx, 0);
		this.endPos = new Position(columnIdx, tableStore.get().numRows-1);
		return this;
	}

	selectAll() {
		this.isActive = true;
		const t = _tableToRect(tableStore.get());
		this.startPos = t.startPos;
		this.endPos = t.endPos;
		return this;
	}

	selectCell(columnIdx: number, rowIdx: number) {
		this.isActive = true;
		this.startPos = new Position(columnIdx, rowIdx);
		this.endPos = new Position(columnIdx, rowIdx);
		return this;
	}

	moveUp(){
		this.move(0, -1);
		return this;
	}

	moveDown(){
		this.move(0, 1);
		return this;
	}

	moveLeft(){
		this.move(-1, 0);
		return this;
	}

	moveRight(){
		this.move(1, 0);
		return this;
	}

	private move(columns: number, rows: number) {
		if(this.isActive) {
			this.collapse().translate(columns,rows).constrainToRect(_tableToRect(tableStore.get()));
		}
	}
}

function createSelection() {
	const s = writable(new Selection());

	return {
		subscribe: s.subscribe,
		update: s.update,
		set: s.set,
		get: () => get(s),
		reset: () => s.update(s => s.reset()),

		selectRow: (rowIdx: number) => s.update(s => s.selectRow(rowIdx)),
		selectColumn: (columnIdx: number) => s.update(s => s.selectColumn(columnIdx)),
		selectAll: () => s.update(s => s.selectAll()),
		selectCell: (columnIdx: number, rowIdx: number) => s.update(s => s.selectCell(columnIdx, rowIdx)),

		moveUp: () => s.update(s => s.moveUp()),
		moveDown: () => s.update(s => s.moveDown()),
		moveLeft: () => s.update(s => s.moveLeft()),
		moveRight: () => s.update(s => s.moveRight())
	}
}

function _tableToRect(table: Table) {
	return new Rect(0,0,table.numColumns-1, table.numRows-1);
}

export const selection = createSelection();
export const focusedCell = derived(selection, () => selection.get().focusedCell())