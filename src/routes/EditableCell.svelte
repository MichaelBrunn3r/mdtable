<script>
	export let isHeader = false;
	export let value = "";

	const initValue = value;

	function valueChanged(e) {
		let newVal = e.target.innerText;

		// Clean up redundant newline
		if(newVal.charAt(newVal.length-1) == '\n') {
			newVal = newVal.substr(0, newVal.length-1);
		}

		value = newVal;
	}
</script>

<style>
	th {
		font-weight: 600;
	}

	td, th {
		border: 1px solid #dfe2e5;
		padding: 6px 6px;
		min-width: 40px;
		min-height: 30px;
	}
</style>

{#if isHeader}
	<th contenteditable=true on:input={valueChanged} innerText={value}>{initValue}</th>
{:else}
	<td contenteditable=true on:input={valueChanged} innerText={value}>{initValue}</td>
{/if}