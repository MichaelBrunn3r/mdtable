import { getableStore } from './utils';
import { Rect } from './geometry';

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

function createSelection() {
	const s = getableStore(new Rect(-1,-1,-1,-1));

	return {
		subscribe: s.subscribe,
		update: s.update,
		set: s.set,
		rect: s.get,
		selectRow: (rowIdx: number) => s.set(new Rect(0, rowIdx, numColumnsStore.get()-1, rowIdx)),
		selectColumn: (columnIdx: number) => s.set(new Rect(columnIdx, 0, columnIdx, numRowsStore.get()-1)),
		selectAll: () => s.set(new Rect(0, 0, numColumnsStore.get()-1, numRowsStore.get()-1)),
		selectCell: (columnIdx: number, rowIdx: number) => s.set(new Rect(columnIdx, rowIdx, columnIdx, rowIdx))
	}
}

export const selection = createSelection();

export {
	tableStore,
	numRowsStore as numRows,
	numColumnsStore as numColumns
}