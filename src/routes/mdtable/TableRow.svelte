<script>
	import AutoresizeTextarea from './AutoresizeTextarea.svelte';

	export let isHeader = false;
	export let entries;
</script>

<style>
	th {
		font-weight: 600;
	}

	td, th {
		border: 1px solid #dfe2e5;
		padding: 6px 6px;
	}
</style>

{#each entries as entry}
	{#if isHeader}
		<th><AutoresizeTextarea/></th>
	{:else}
		<td><AutoresizeTextarea/></td>
	{/if}
{/each}

