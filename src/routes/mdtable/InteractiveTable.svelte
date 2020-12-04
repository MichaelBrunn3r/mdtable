<script>
	import TableRow from './TableRow.svelte';

	export let header = ["Tables", "Are", "Cool"];
	export let rows = [["col 1 is", "left aligned", "$1600"],["col 2 is","centered", "$12"],["col 3 is", "right-aligned", "$1"],["col 1 is", "left aligned", "$1600"],["col 1 is", "left aligned", "$1600"]];
</script>

<style>
	table {
		border-spacing: 0;
		border-collapse: collapse;
		text-align: left;
		margin-bottom: 0;
	}

	tbody tr:nth-child(even) {
		background-color: #f6f8fa;
	}

	button {
		font-size: 20px;
		border: none;
		background: none;
		padding: 0 8px;
	}

	.container-col {
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding: 0 40px;
	}

	.container-row {
		display: flex;
		justify-content: center;
		padding: 0 40px;
	}

	.container-col > button {
		margin-right: 60px;
		margin-left: 25px;
	}
</style>

<div class="container-col">
	<div class="container-row">
		<table class="table">
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
	<button type="button" class="btn"><i class="far fa-plus-square"></i></button>
</div>