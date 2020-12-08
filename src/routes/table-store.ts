import { getableStore } from './utils';
import { Rect } from './geometry';

export const selection = getableStore(new Rect(-1,-1,-1,-1));
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

export function addRow() {
	tableStore.update(rows => {
		let row: Array<string> = new Array(numColumnsStore.get());
		row.fill('')
		rows.push(row)
		return rows;
	})
	numRowsStore.update(n => n+1);
}

export function addColumn() {
	tableStore.update(rows => {
		for(let i=0; i<rows.length; i++) {
			rows[i].push('');
		}
		return rows;
	})
	numColumnsStore.update(n => n+1);
}

export function removeRow() {
	if(numRowsStore.get() > 1) {
		tableStore.update(rows => {
			rows.pop();
			return rows;
		})
		numRowsStore.update(n => n+1);
	}
}

export function removeColumn() {
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

export function selectRow(rowIdx: number) {
	selection.set(new Rect(0, rowIdx, numColumnsStore.get()-1, rowIdx));
}

export function selectColumn(columnIdx: number) {
	selection.set(new Rect(columnIdx, 0, columnIdx, numRowsStore.get()-1));
}

export function selectAll() {
	selection.set(new Rect(0, 0, numColumnsStore.get()-1, numRowsStore.get()-1));
}

export function selectCell(columnIdx: number, rowIdx: number) {
	selection.set(new Rect(columnIdx, rowIdx, columnIdx, rowIdx));
}

export {
	tableStore,
	numRowsStore as numRows,
	numColumnsStore as numColumns
}