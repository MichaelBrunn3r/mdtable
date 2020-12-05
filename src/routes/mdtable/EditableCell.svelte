<script>
	export let isHeader = false;
	export let value = "";

	const initValue = value;

	function valueChanged(e) {
		const newVal = e.target.innerText;
		value = newVal.substr(0, newVal.length-1);
	}
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
	<th contenteditable=true on:input={valueChanged} innerText={value}>{initValue}</th>
{:else}
	<td contenteditable=true on:input={valueChanged} innerText={value}>{initValue}</td>
{/if}