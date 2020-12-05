<script>
	export let isHeader = false;
	export let value;
</script>

<style>
	th {
		font-weight: 600;
	}

	td, th {
		border: 1px solid #dfe2e5;
		padding: 6px 6px;
		min-width: 100px;
	}
</style>

{#if isHeader}
	<th contenteditable=true>{value}</th>
{:else}
	<td contenteditable=true>{value}</td>
{/if}