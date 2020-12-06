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

	tr {
		height: 30px;
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
							<EditableCell bind:value={entry} isHeader=true/>
						{/each}
					{/if}
				</tr>
			</thead>
			<tbody>
				{#if rows && rows.length > 1}
					{#each rows.slice(1) as row}
						<tr>
							{#each row as entry}
								<EditableCell bind:value={entry}/>
							{/each}
						</tr>
					{/each}
				{/if}
			</tbody>
		</table>
		<ResizeTableButton on:resizeH+={tableStore.addColumn} on:resizeH-={tableStore.removeColumn} on:resizeV+={tableStore.addRow} on:resizeV-={tableStore.removeRow}/>
	</div>
</div>