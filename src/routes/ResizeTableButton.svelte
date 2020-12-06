<script>
	import { createEventDispatcher } from 'svelte';

	export let direction = "vertical";

	const dispatch = createEventDispatcher();

	let dragTriggerLen = 30;

	let elem;
	let initialPos = 0;

	function dragStart(e) {
		if(direction === "vertical") {
			initialPos = e.clientY;
		} else {
			initialPos = e.clientX;
		}

		document.addEventListener('mousemove', drag);
		document.addEventListener('mouseup', dragEnd);
	}

	function drag(e) {
		let diff;
		if(direction === "vertical") {
			diff = e.clientY - initialPos;
		} else {
			diff = e.clientX - initialPos;
		}

		if(diff >= dragTriggerLen) {
			dispatch('resizePositve');
			initialPos = direction === "vertical" ? e.clientY : e.clientX;
		} else if(diff <= - dragTriggerLen) {
			dispatch('resizeNegative');
			initialPos = direction === "vertical" ? e.clientY : e.clientX;
		}
	}

	function dragEnd(e) {
		document.removeEventListener('mousemove', drag);
		document.removeEventListener('mouseup', dragEnd);
	}
</script>

<style>
	button {
		font-size: 1rem;
		padding: 0 8px;
	}

	.horizontal {
		margin-bottom: 30px;
	}
</style>

{#if direction === "vertical"}
	<button type="button" class="btn" bind:this={elem} on:mousedown|preventDefault={dragStart}>
			<i class="fas fa-arrows-alt-v"/>
	</button>
{:else}
	<button type="button" class="btn horizontal" bind:this={elem} on:mousedown|preventDefault={dragStart}>
		<i class="fas fa-arrows-alt-h"/>
	</button>
{/if}