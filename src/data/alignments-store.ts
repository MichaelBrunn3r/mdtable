import { writable, get } from 'svelte/store';

export enum Alignment {
	LEFT, RIGHT, CENTER, DEFAULT=LEFT
}

function createAlignments() {
	const a = writable(new Array<Alignment>());

	return {
		subscribe: a.subscribe,
		set: a.set,
		update: a.update,
		get: () => get(a),

		alignColumn
	}
}

export function alignColumn(columnIdx: number, alignment: Alignment) {
	alignmentStore.update(alignments => {
		alignments[columnIdx] = alignment;
		return alignments;
	})
}

const alignmentStore = createAlignments();

export {
	alignmentStore as columnAlignments
}