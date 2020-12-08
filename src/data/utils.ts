import { writable, get } from 'svelte/store';

export function constrain(val: number, min: number, max: number) {
	return Math.min(Math.max(val, min), max);
}

export function getableStore(init) {
	let store = writable(init);

	return {
		subscribe: store.subscribe,
		set: store.set,
		update: store.update,
		get: () => get(store)
	}
}