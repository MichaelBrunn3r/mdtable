<script lang="ts">
	class Selection {
		startRow = 0;
		startColumn = 0;
		endRow = 0;
		endColumn = 0;

		select(startRow: number, startColumn: number, endRow: number, endColumn: number) {
			this.startRow = startRow;
			this.endRow = endRow;
			this.startColumn = startColumn;
			this.endColumn = endColumn;
		}

		isSelected(rowIdx: number, columnIdx: number) {
			return rowIdx >= this.startRow && rowIdx <= this.endRow
					&& columnIdx >= this.startColumn && columnIdx <= this.endColumn;
		}

		isSelectionTop(rowIdx: number, columnIdx: number) {
			return this.isSelected(rowIdx, columnIdx) && rowIdx === this.startRow;
		}

		isSelectionBottom(rowIdx: number, columnIdx: number) {
			return this.isSelected(rowIdx, columnIdx) && rowIdx === this.endRow;
		}

		isSelectionLeft(rowIdx: number, columnIdx: number) {
			return this.isSelected(rowIdx, columnIdx) && columnIdx === this.startColumn;
		}

		isSelectionRight(rowIdx: number, columnIdx: number) {
			return this.isSelected(rowIdx, columnIdx) && columnIdx === this.endColumn;
		}
	}

	let selection = new Selection();
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
	$cell-selected-border-width: 2px;
	$cell-selected-border-color: rgb(55, 53, 59);
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
		border: $cell-border-width solid $cell-border-color;
		cursor: cell;

		&.selection-top {
			border-top: $cell-selected-border-width solid $cell-selected-border-color;
		}
		&.selection-bottom {
			border-bottom: $cell-selected-border-width solid $cell-selected-border-color;
		}
		&.selection-left {
			border-left: $cell-selected-border-width solid$cell-selected-border-color;
		}
		&.selection-right {
			border-right: $cell-selected-border-width solid $cell-selected-border-color;
		}
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
		<!-- Top aux row -->
		<tr class="aux-wrapper-top">
			<td class="aux-cell aux-cell-corner"></td>
			{#each rows[0] as _, columnIdx}
				<td class="aux-cell aux-cell-top">{columnIdx+1}</td>
			{/each}
		</tr>

		<!-- Table content -->
		{#each rows as row, rowIdx}
			<tr>
				<!-- Row aux -->
				<td class="aux-cell aux-cell-left">{rowIdx+1}</td>

				<!-- Row content -->
				{#each row as cell, columnIdx}
					<td class="cell"
						class:selection-top={selection.isSelectionTop(rowIdx, columnIdx)}
						class:selection-bottom={selection.isSelectionBottom(rowIdx, columnIdx)}
						class:selection-left={selection.isSelectionLeft(rowIdx, columnIdx)}
						class:selection-right={selection.isSelectionRight(rowIdx, columnIdx)}
						>{cell}</td>
				{/each}
			</tr>
		{/each}
	</table>
</div>