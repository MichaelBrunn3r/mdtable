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
	tbody tr:nth-child(even) {
		background-color: #f6f8fa;
	}

	th {
		font-weight: 600;
	}

	td, th {
		border: 1px solid #dfe2e5;
		padding: 0;
	}

	.wrapper {
		position: relative;
		display: inline-block;
		padding: 20px 25px;
		padding-top: 0;
	}

	.selected {
		border: 2px solid #b9b9b9;
	}
</style>

<div class="d-flex justify-content-center">
	<div class="wrapper">
		<table>
			<thead>
				<tr>
					{#if rows && rows.length > 0}
						{#each rows[0] as entry, colidx}
							<th on:click={() => selectCell(0, colidx)} class:selected={selectedRow === 0 && selectedColumn === colidx}>
							<EditableCell bind:value={entry} isSelected={selectedRow === 0 && selectedColumn === colidx}/>
							</th>
						{/each}
					{/if}
				</tr>
			</thead>
			<tbody>
				{#if rows && rows.length > 1}
					{#each rows.slice(1) as row, rowidx}
						<tr>
							{#each row as entry, colidx}
								<td on:click={() => selectCell(rowidx+1, colidx)} class:selected={selectedRow === rowidx+1 && selectedColumn === colidx}>
									<EditableCell bind:value={entry} isSelected={selectedRow === rowidx+1 && selectedColumn === colidx}/>
								</td>
							{/each}
						</tr>
					{/each}
				{/if}
			</tbody>
		</table>
		<ResizeTableButton on:resizeH+={tableStore.addColumn} on:resizeH-={tableStore.removeColumn} on:resizeV+={tableStore.addRow} on:resizeV-={tableStore.removeRow}/>
	</div>
</div>