<script lang="ts">
	let rows = [
		['1', '2', '3', '4', '5'],
		['1', '2', '3', '4', '5'],
		['1', '2', '3', '4', '5'],
		['1', '2', '3', '4', '5'],
		['1', '2', '3', '4', '5'],
	]
</script>

<style lang="scss">
	$cell-border-color: rgb(187, 179, 179);
	$cell-border-width: 0.5px;
	$aux-border-color: rgb(214, 212, 212);
	$aux-bg-color: rgb(231, 231, 231);

	.wrapper {
		display: grid;
		align-content: stretch;
	}

	/* Table */
	table {
		margin: 0;
		padding: 0;
		table-layout: auto;

		tr:nth-child(odd) {
			background-color: #f6f8fa;
		}
	}

	tr {
		margin: 0;
		padding: 0;
	}
	.cell {
		min-width: 40px;
		width: min-content;
		min-height: 20px;
		border-right: $cell-border-width solid $cell-border-color;
		border-bottom: $cell-border-width solid $cell-border-color;
	}

	/* Aux */
	.aux-cell {
		text-align: center;
		font-size: 0.8rem;
		background-color: $aux-bg-color;
		padding: 0;
	}
	.aux-cell-top {
		height: 20px;
		border-right: $cell-border-width solid $aux-border-color;
		border-bottom: $cell-border-width solid $cell-border-color;
	}
	.aux-cell-left {
		width: 20px;
		border-right: $cell-border-width solid $cell-border-color;
		border-bottom: $cell-border-width solid $aux-border-color;
	}
	.aux-cell-corner {
		border-right: $cell-border-width solid $aux-border-color;
		border-bottom: $cell-border-width solid $aux-border-color;
	}
</style>

<div class="wrapper">
	<table>
		<tr class="aux-wrapper-top">
			<td class="aux-cell aux-cell-corner"></td>
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