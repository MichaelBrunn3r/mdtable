<script>
	export let isHeader = false;
	export let entries;
</script>

<style>
	th {
		font-weight: 600;
	}

	td, th {
		border: 1px solid #dfe2e5;
		padding: 6px 13px;
	}
</style>


{#each entries as entry}
	{#if isHeader}
		<th>{entry}</th>
	{:else}
		<td>{entry}</td>
	{/if}
{/each}
