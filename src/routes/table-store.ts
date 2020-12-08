import { getableStore } from './utils';
import { Selection } from './selection';

export const selection = getableStore(new Selection(-1,-1,-1,-1));
const tableStore = getableStore([
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
]);
const numRowsStore = getableStore(12);
const numColumnsStore = getableStore(4);

function addRow() {
	tableStore.update(rows => {
		let row: Array<string> = new Array(numColumnsStore.get());
		row.fill('')
		rows.push(row)
		return rows;
	})
	numRowsStore.update(n => n+1);
}

function addColumn() {
	tableStore.update(rows => {
		for(let i=0; i<rows.length; i++) {
			rows[i].push('');
		}
		return rows;
	})
	numColumnsStore.update(n => n+1);
}

function removeRow() {
	if(numRowsStore.get() > 1) {
		tableStore.update(rows => {
			rows.pop();
			return rows;
		})
		numRowsStore.update(n => n+1);
	}
}

function removeColumn() {
	if(numColumnsStore.get() > 1) {
		tableStore.update(rows => {
			for(let i=0; i<numRowsStore.get(); i++) {
				rows[i].pop();
			}
			return rows;
		})
		numColumnsStore.update(n => n-1);
	}
}

export {
	tableStore,
	numRowsStore as numRows,
	numColumnsStore as numColumns,
	addRow,
	addColumn,
	removeRow,
	removeColumn
}