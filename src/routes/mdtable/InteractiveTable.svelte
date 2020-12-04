<script>
	export let headers = ["Tables", "Are", "Cool"];
	export let rows = [["col 1 is", "left aligned", "$1600"],["col 2 is","centered", "$12"],["col 3 is", "right-aligned", "$1"]];

</script>

<style>
	table {
		border-spacing: 0;
		border-collapse: collapse;
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
</style>

<div>
	<table>
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
</div>