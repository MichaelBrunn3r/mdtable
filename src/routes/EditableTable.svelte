<script lang="ts">
	import tableStore from './table-store';
	import ResizeTableButton from './ResizeTableButton.svelte';
	import EditableCell from './EditableCell.svelte';

	let rows = tableStore.rows();
	tableStore.subscribeRows(storedRows => {
		rows = storedRows;
	})

	let selectedRow: number = undefined;
	let selectedColumn: number = undefined;

	function selectCell(row: number, column: number) {
		selectedRow = row;
		selectedColumn = column;
	}
</script>

<style>
	.grid {
		display: grid;
		grid-template-areas:
			"tlcorner top trcorner"
			"left middle right"
			"blcorner bottom brcorner"
			;
		justify-content: center;

		height: fit-content;
	}

	/* Table */
	table {
		grid-area: middle;
		align-self: start;
	}
	tbody tr:first-child {
		font-weight: 600;
	}
	tbody tr:nth-child(even) {
		background-color: #f6f8fa;
	}

	/* Resize button */
	.resize-wrapper {
		grid-area: brcorner;
		justify-self: center;
	}
</style>

<div class="grid">
	<table>
		<tbody>
			{#each rows as row, rowIdx}
				<tr>
					{#each row as entry, columnIdx}
						<EditableCell
							bind:value={entry}
							isSelected={selectedRow === rowIdx && selectedColumn === columnIdx}
							on:clicked={() => selectCell(rowIdx,columnIdx)} />
					{/each}
				</tr>
			{/each}
		</tbody>
	</table>
	<div class="resize-wrapper">
		<ResizeTableButton on:resizeH+={tableStore.addColumn} on:resizeH-={tableStore.removeColumn} on:resizeV+={tableStore.addRow} on:resizeV-={tableStore.removeRow}/>
	</div>
</div>