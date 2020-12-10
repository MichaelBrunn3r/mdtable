import { writable, derived, get, Writable } from 'svelte/store';
import { Rect } from './geometry';
import { Alignment, columnAlignments } from './alignments-store';

// Table

export class Table {
	rows: string[][]
	numRows: number
	numColumns: number

	constructor(rows: string[][], numColumns: number) {
		this.rows = rows;
		this.numRows = rows.length;
		this.numColumns = numColumns;
	}
}

function createTable() {
	const t = writable(new Table([], 0));

	return {
		subscribe: t.subscribe,
		set: (table: Table) => {
			t.set(table);
			columnAlignments.set(new Array(table.numColumns).fill(Alignment.DEFAULT));
		},
		update: t.update,
		get: () => get(t),

		numColumns: derived(t, (t) => t.numColumns),
		numRows: derived(t, (t) => t.numRows),
		addRow,
		addColumn,
		removeRow,
		removeColumn
	}
}

export const tableStore = createTable();

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

	columnAlignments.update(alignments => {
		alignments.push(Alignment.DEFAULT);
		return alignments;
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

		columnAlignments.update(alignments => {
			alignments.pop();
			return alignments;
		})
	}
}

// Testing
let table = new Table([
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
], 4);
tableStore.set(table);