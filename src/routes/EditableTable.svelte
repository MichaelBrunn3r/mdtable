<script>
	import EditableCell from './EditableCell.svelte';
	import ResizeTableButton from './ResizeTableButton.svelte';
	import tableStore from './table-store';

	let rows = tableStore.rows;
	tableStore.subscribeRows(storedRows => {
		rows = storedRows;
	})

	let selectedRow = undefined;
	let selectedColumn = undefined;

	function selectCell(row, column) {
		selectedRow = row;
		selectedColumn = column;
	}
</script>

<style>
	thead tr {
		font-weight: 600;
	}

	tbody tr:nth-child(even) {
		background-color: #f6f8fa;
	}

	.wrapper {
		position: relative;
		display: inline-block;
		padding: 20px 25px;
		padding-top: 0;
	}
</style>

<div class="d-flex justify-content-center">
	<div class="wrapper">
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
		<ResizeTableButton on:resizeH+={tableStore.addColumn} on:resizeH-={tableStore.removeColumn} on:resizeV+={tableStore.addRow} on:resizeV-={tableStore.removeRow}/>
	</div>
</div>