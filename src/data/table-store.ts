import { Rect } from './geometry';
import { writable, derived, get } from 'svelte/store';

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

function createTable(rows: string[][], numColumns: number) {
	const t = writable(new Table(rows, numColumns));

	return {
		subscribe: t.subscribe,
		set: t.set,
		update: t.update,
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
	if(get(tableStore).numRows > 1) {
		tableStore.update(table => {
			table.rows.pop();
			table.numRows--;
			return table;
		})
	}
}

function removeColumn() {
	if(get(tableStore).numColumns > 1) {
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
		selectRow: (rowIdx: number) => s.set(new Rect(0, rowIdx, get(tableStore.numColumns)-1, rowIdx)),
		selectColumn: (columnIdx: number) => s.set(new Rect(columnIdx, 0, columnIdx, get(tableStore.numRows)-1)),
		selectAll: () => s.set(new Rect(0, 0, get(tableStore.numColumns)-1, get(tableStore.numRows)-1)),
		selectCell: (columnIdx: number, rowIdx: number) => s.set(new Rect(columnIdx, rowIdx, columnIdx, rowIdx))
	}
}

export const selection = createSelection();