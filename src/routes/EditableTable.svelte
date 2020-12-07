<script lang="ts">
	let rows = [
		['1', '2', '3', '4', '5'],
		['1', '2', '3', '4', '5'],
		['1', '2', '3', '4', '5'],
		['1', '2', '3', '4', '5'],
		['1', '2', '3', '4', '5'],
	]
</script>

<style>
	.wrapper {
		display: grid;
		align-content: stretch;
	}

	/* Table */
	table {
		margin: 0;
		padding: 0;
		table-layout: auto;
	}
	tr {
		margin: 0;
		padding: 0;
	}
	table tr:nth-child(odd) {
		background-color: #f6f8fa;
	}
	.cell {
		min-width: 40px;
		width: min-content;
		min-height: 20px;
		border-right: 0.5px solid rgb(187, 179, 179);
		border-bottom: 0.5px solid rgb(187, 179, 179);
	}

	/* Aux */
	.aux-cell {
		text-align: center;
		font-size: 0.8rem;
		background-color: rgb(231, 231, 231);
		border-right: 0.5px solid rgb(187, 179, 179);
		border-bottom: 0.5px solidrgb(187, 179, 179);
		padding: 0;
	}
	.aux-cell-top {
		height: 20px;
	}
	.aux-cell-left {
		width: 20px;
	}
</style>

<div class="wrapper">
	<table>
		<tr class="aux-wrapper-top">
			<td class="aux-cell aux-cell-top"></td>
			{#each rows[0] as _, columnIdx}
				<td class="aux-cell aux-cell-top">{columnIdx+1}</td>
			{/each}
		</tr>

		{#each rows as row, rowIdx}
			<tr>
			<td class="aux-cell aux-cell-left">{rowIdx+1}</td>
				{#each row as cell }
					<td class="cell">{cell}</td>
				{/each}
			</tr>
		{/each}
	</table>
</div>