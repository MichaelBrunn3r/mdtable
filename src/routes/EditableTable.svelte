<script>
	import EditableCell from './EditableCell.svelte';
	import ResizeTableButton from './ResizeTableButton.svelte';
	import tableStore from './table-store';

	let rows = tableStore.rows;
	tableStore.subscribeRows(storedRows => {
		rows = storedRows;
	})
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
</style>

<div class="d-flex justify-content-center">
	<div class="wrapper">
		<table>
			<thead>
				<tr>
					{#if rows && rows.length > 0}
						{#each rows[0] as entry}
							<th >
							<EditableCell bind:value={entry}/>
							</th>
						{/each}
					{/if}
				</tr>
			</thead>
			<tbody>
				{#if rows && rows.length > 1}
					{#each rows.slice(1) as row}
						<tr>
							{#each row as entry}
								<td >
									<EditableCell bind:value={entry}/>
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