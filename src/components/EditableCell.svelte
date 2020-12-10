<script lang="ts">
	import { Alignment } from '../data/alignments-store';

	export let value: string;
	export let isSelected: boolean;
	export let alignment: Alignment;
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

	.left {
		text-align: left;
	}

	.right {
		text-align: right;
	}

	.center {
		text-align: center;
	}
</style>

{#if isSelected}
	<div
		class="input"
		bind:innerHTML={value}
		contenteditable=true
		class:left={alignment === Alignment.LEFT}
		class:right={alignment === Alignment.RIGHT}
		class:center={alignment === Alignment.CENTER}
		></div>
{:else}
	<div
		class="input"
		bind:innerHTML={value}
		contenteditable=false
		class:left={alignment === Alignment.LEFT}
		class:right={alignment === Alignment.RIGHT}
		class:center={alignment === Alignment.CENTER}
		></div>
{/if}