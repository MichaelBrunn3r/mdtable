<script>
	import TableRow from './TableRow.svelte';

	export let header = ["Tables", "Are", "Cool"];
	export let rows = [["col 1 is", "left aligned", "$1600"],["col 2 is","centered", "$12"],["col 3 is", "right-aligned", "$1"],["col 1 is", "left aligned", "$1600"],["col 1 is", "left aligned", "$1600"]];

	function addRow() {
		rows.push(['a', 'b', 'c'])
		rows = rows;
	}

</script>

<style>
	tbody tr:nth-child(even) {
		background-color: #f6f8fa;
	}

	button {
		font-size: 20px;
		border: none;
		background: none;
		padding: 0 8px;
	}

	.wrapper-horizontal {
		display: flex;
		justify-content: center;
		margin-right: -30px;
	}

	.wrapper-vertical {
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	#btn-add-col {
		margin-bottom: 30px;
	}
</style>

<div class="wrapper-horizontal">
	<div class="wrapper-vertical">
		<table>
			<thead>
				<tr>
					<TableRow isHeader={true} entries={header}/>
				</tr>
			</thead>
			<tbody>
				{#each rows as row}
					<tr>
						<TableRow entries={row}/>
					</tr>
				{/each}
			</tbody>
		</table>
		<button type="button" class="btn"><i class="far fa-plus-square"></i></button>
	</div>
	<button id="btn-add-col" type="button" class="btn"><i class="far fa-plus-square"></i></button>
</div>