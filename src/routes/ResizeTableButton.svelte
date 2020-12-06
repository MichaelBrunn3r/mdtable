<script>
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	let elem;
	let initialX;
	let initialY;

	function dragStart(e) {
		initialX = e.clientX;
		initialY = e.clientY;

		document.addEventListener('mousemove', drag);
		document.addEventListener('mouseup', dragEnd);
	}

	function drag(e) {
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

	function dragEnd(e) {
		document.removeEventListener('mousemove', drag);
		document.removeEventListener('mouseup', dragEnd);
	}
</script>

<style>
	button {
		font-size: 1rem;
		padding: 0 8px;
		position: absolute;
		bottom: 0px;
		right: 0px;
		transform: scaleX(-1);
	}
</style>

<button type="button" class="btn" bind:this={elem} on:mousedown|preventDefault={dragStart}>
	<i class="fas fa-expand-alt"></i>
</button>