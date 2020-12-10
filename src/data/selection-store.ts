import { writable, derived, get, Writable } from 'svelte/store';
import { Rect } from './geometry';
import { tableStore, Table } from './table-store';

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

function _tableToRect(table: Table) {
	return new Rect(0,0,table.numColumns-1, table.numRows-1);
}

export const selection = createSelection();

export const focusedCell = derived(selection, () => selection.get().startPos)