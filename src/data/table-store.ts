import { Rect } from './geometry';
import { writable, derived, get, Writable } from 'svelte/store';

class Table {
	rows: string[][]
	numRows: number
	numColumns: number

	constructor(rows: string[][], numColumns: number) {
		this.rows = rows;
		this.numRows = rows.length;
		this.numColumns = numColumns;
	}
}

function _tableToRect(table: Table) {
	return new Rect(0,0,table.numColumns-1, table.numRows-1);
}

function createTable(rows: string[][], numColumns: number) {
	const t = writable(new Table(rows, numColumns));

	return {
		subscribe: t.subscribe,
		set: t.set,
		update: t.update,
		get: () => get(t),
		numColumns: derived(t, () => get(t).numColumns),
		numRows: derived(t, () => get(t).numRows),
		addRow,
		addColumn,
		removeRow,
		removeColumn
	}
}

export const tableStore = createTable([
	['1','2','3','4'],
	['1','2','3','4'],
	['1','2','3','4'],
	['1','2','3','asdasdasdasdasdasd'],
	['1','2','3','4'],
	['1','2','3','4'],
	['1','2','3','4'],
	['1','2','3','4'],
	['1','2','3','4'],
	['1','2','3','4'],
	['1','2','3','4'],
	['1','2','3','4']
],4);

function addRow() {
	tableStore.update(table => {
		let row: Array<string> = new Array(table.numColumns);
		row.fill('')

		table.rows.push(row)
		table.numRows++;
		return table;
	})
}

function addColumn() {
	tableStore.update(table => {
		table.rows.forEach(row => row.push(''))
		table.numColumns++;
		return table;
	})
}

function removeRow() {
	if(tableStore.get().numRows > 1) {
		tableStore.update(table => {
			table.rows.pop();
			table.numRows--;
			return table;
		})
	}
}

function removeColumn() {
	if(tableStore.get().numColumns > 1) {
		tableStore.update(table => {
			table.rows.forEach(row => row.pop())
			table.numColumns--;
			return table;
		})
	}
}

// Selection

function createSelection() {
	const s = writable(new Rect(-1,-1,-1,-1));

	return {
		subscribe: s.subscribe,
		update: s.update,
		set: s.set,
		get: () => get(s),
		selectRow: (rowIdx: number) => s.set(new Rect(0, rowIdx, tableStore.get().numColumns-1, rowIdx)),
		selectColumn: (columnIdx: number) => s.set(new Rect(columnIdx, 0, columnIdx, tableStore.get().numRows-1)),
		selectAll: () => s.set(_tableToRect(tableStore.get())),
		selectCell: (columnIdx: number, rowIdx: number) => s.set(new Rect(columnIdx, rowIdx, columnIdx, rowIdx)),
		moveUp: () => _moveSelection(s, 0, -1),
		moveDown: () => _moveSelection(s, 0, 1),
		moveLeft: () => _moveSelection(s, -1, 0),
		moveRight: () => _moveSelection(s, 1, 0)
	}
}

function _moveSelection(selection: Writable<Rect>, columns: number, rows: number) {
	selection.update(s => {
		return s.collapse().translate(columns,rows).constrainToRect(_tableToRect(tableStore.get()))
	})
}

export const selection = createSelection();

export const focusedCell = derived(selection, () => selection.get().startPos)