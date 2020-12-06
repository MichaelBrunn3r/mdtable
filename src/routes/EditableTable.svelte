<script>
	import EditableCell from './EditableCell.svelte';
	import ResizeTableButton from './ResizeTableButton.svelte';

	export let header = ["Tables", "Are", "Cool"];
	export let rows = [['1', '2', '3'], ['4', '5', '6'], ['7', '8', '9']];

	function addRow() {
		let row = new Array(header.length);
		row.fill('')
		rows.push(row)
		rows = rows;
	}

	function removeRow() {
		rows.pop();
		rows = rows;
	}

	function addColumn() {
		header.push('');
		header = header;

		for(let i=0; i<rows.length; i++) {
			rows[i].push('');
		}

		rows = rows;
	}

	function removeColumn() {
		header.pop();
		header = header;

		for(let i=0; i<rows.length; i++) {
			rows[i].pop();
		}
		rows = rows;
	}
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
					{#each header as entry,i}
						<EditableCell bind:value={entry} isHeader=true/>
					{/each}
				</tr>
			</thead>
			<tbody>
				{#each rows as row,i}
					<tr>
						{#each row as entry,k}
							<EditableCell bind:value={entry}/>
						{/each}
					</tr>
				{/each}
			</tbody>
		</table>
		<ResizeTableButton on:resizeH+={addColumn} on:resizeH-={removeColumn} on:resizeV+={addRow} on:resizeV-={removeRow}/>
	</div>
</div>
