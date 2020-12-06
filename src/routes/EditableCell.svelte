<script>
	import { createEventDispatcher } from 'svelte';

	export let value = "";
	export let isSelected;

	const dispatch = createEventDispatcher();
	let initValue = value;

	function valueChanged(e) {
		let newVal = e.target.innerText;

		// Clean up redundant newline
		if(newVal.charAt(newVal.length-1) == '\n') {
			newVal = newVal.substr(0, newVal.length-1);
		}

		value = newVal;
	}

	function onCellClicked() {
		dispatch('clicked');
	}
</script>

<style>
	.input {
		min-width: 30px;
		min-height: 30px;
		width: fit-content;
		height: fit-content;
	}

	td {
		cursor: default;
		border: 1px solid #dfe2e5;
		padding: 0;
	}

	.selected {
		border: 2px solid #b9b9b9;
	}
</style>

<td class:selected={isSelected} on:click={onCellClicked} tabindex=0>
	<div class="input" innerText={value} on:input={valueChanged} contenteditable={isSelected}>{initValue}</div>
</td>