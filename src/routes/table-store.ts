import { writable } from 'writable-store/dist/index.js';

const rowsStore = writable<Array<Array<string>>>([['','',''],['','',''],['','','']]);
const numRowsStore = writable(3);
const numColsStore = writable(3);

rowsStore.subscribe(rows => {
	numRowsStore.set(() => rows.length);
	numColsStore.set(() => rows[0].length);
})

function addRow() {
	rowsStore.set(rows => {
		let row: Array<string> = new Array(numColsStore.get());
		row.fill('')
		rows.push(row)
		return rows;
	})
}

function addColumn() {
	rowsStore.set(rows => {
		for(let i=0; i<rows.length; i++) {
			rows[i].push('');
		}
		return rows;
	})
}

function removeRow() {
	if(numRowsStore.get() > 1) {
		rowsStore.set(rows => {
			rows.pop();
			return rows;
		})
	}
}

function removeColumn() {
	if(numColsStore.get() > 1) {
		rowsStore.set(rows => {
			for(let i=0; i<numRowsStore.get(); i++) {
				rows[i].pop();
			}
			return rows;
		})
	}
}

export default {
	subscribeRows: rowsStore.subscribe,
	rows: rowsStore.get(),
	numRows: numRowsStore.get(),
	numCols: numColsStore.get(),

	addRow,
	addColumn,
	removeRow,
	removeColumn
}