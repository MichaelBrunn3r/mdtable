<script>
	import { onMount } from 'svelte';

	let textarea;

	onMount(async () => {
		autoresize();
	})

	function autoresize() {
		textarea.style.height = 'auto';
		textarea.style.height = textarea.scrollHeight + 'px';
	}
</script>

<style>
	textarea {
		border: none;
		background-color: transparent;
		width: 100%;
		height: auto;
		resize: none;
	}
</style>

<textarea bind:this={textarea} rows="1" on:input={autoresize}/>