<script lang="ts">
	import EditableCell from './EditableCell.svelte';
	import ResizeTableButton from './ResizeTableButton.svelte';
	import tableStore from './table-store';

	let rows = tableStore.rows;
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
	thead tr {
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
		<thead>
			<tr>
				{#if rows && rows.length > 0}
					{#each rows[0] as entry, columnIdx}
						<EditableCell
							bind:value={entry}
							isSelected={selectedRow === 0 && selectedColumn === columnIdx}
							on:clicked={() => selectCell(0,columnIdx)} />
					{/each}
				{/if}
			</tr>
		</thead>
		<tbody>
			{#if rows && rows.length > 1}
				{#each rows.slice(1) as row, rowIdx}
					<tr>
						{#each row as entry, columnIdx}
							<EditableCell
								bind:value={entry}
								isSelected={selectedRow === rowIdx+1 && selectedColumn === columnIdx}
								on:clicked={() => selectCell(rowIdx+1,columnIdx)} />
						{/each}
					</tr>
				{/each}
			{/if}
		</tbody>
	</table>
	<div class="resize-wrapper">
		<ResizeTableButton on:resizeH+={tableStore.addColumn} on:resizeH-={tableStore.removeColumn} on:resizeV+={tableStore.addRow} on:resizeV-={tableStore.removeRow}/>
	</div>
</div>