<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	let elem: HTMLElement;
	let initialX: number;
	let initialY: number;

	function dragStart(e: MouseEvent) {
		initialX = e.clientX;
		initialY = e.clientY;

		document.addEventListener('mousemove', drag);
		document.addEventListener('mouseup', dragEnd);
	}

	function drag(e: MouseEvent) {
		let diffX = e.clientX - initialX;
		let diffY = e.clientY - initialY;

		if(diffX >= 14) {
			dispatch('resizeH+');
			initialX = e.clientX;
		} else if(diffX <= -14) {
			dispatch('resizeH-');
			initialX = e.clientX;
		}

		if(diffY >= 30) {
			dispatch('resizeV+');
			initialY = e.clientY;
		} else if(diffY <= -30) {
			dispatch('resizeV-');
			initialY = e.clientY;
		}
	}

	function dragEnd(e: MouseEvent) {
		document.removeEventListener('mousemove', drag);
		document.removeEventListener('mouseup', dragEnd);
	}
</script>

<style>
	i {
		font-size: 1rem;
		padding: 0 8px;
		position: absolute;
		bottom: 0px;
		right: 0px;
		transform: scaleX(-1);
		cursor: nwse-resize;
	}
</style>

<i class="fas fa-expand-alt" bind:this={elem} on:mousedown|preventDefault={dragStart}></i>