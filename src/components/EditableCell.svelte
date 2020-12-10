<script lang="ts">
	export let value: string;
	export let isSelected;
</script>

<style lang="scss">
	.input {
		padding: 0;
		margin: 0;

		min-width: 40px;
		width: 100%;

		overflow: visible;
		resize: none;
		border: none;
	}

	[contenteditable=true].input {
		cursor: text;
	}
</style>

{#if isSelected}
	<div class="input" bind:innerHTML={value} contenteditable=true></div>
{:else}
	<div class="input" bind:innerHTML={value} contenteditable=false></div>
{/if}