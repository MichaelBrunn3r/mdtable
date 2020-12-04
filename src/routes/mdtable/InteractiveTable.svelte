<script>
	export let headers = ["Tables", "Are", "Cool"];
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

	th {
		font-weight: 600;
	}

	th,td {
		border: 1px solid #dfe2e5;
		padding: 6px 13px;
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
					{#each headers as header}
						<th>{header}</th>
					{/each}
				</tr>
			</thead>
			<tbody>
				{#each rows as row}
					<tr>
						{#each row as entry}
							<td>{entry}</td>
						{/each}
					</tr>
				{/each}
			</tbody>
		</table>
		<button type="button" class="btn"><i class="far fa-plus-square"></i></button>
	</div>
	<button type="button" class="btn"><i class="far fa-plus-square"></i></button>
</div>