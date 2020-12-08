<script lang="ts">
	import { Selection } from './selection';
	import { tableStore as _table, numRows, numColumns, addColumn, addRow, removeRow, removeColumn } from './table-store';

	let selection: Selection;
	let isSelecting = false;

	// Document listeners
	let mouseUpListener = () => {
		isSelecting = false;
		document.removeEventListener('mouseup', mouseUpListener);
	}

	function onCellMouseDown(rowIdx: number, columnIdx: number) {
		selection = new Selection(rowIdx, columnIdx, rowIdx, columnIdx);
		isSelecting = true;
		document.addEventListener('mouseup', mouseUpListener)
	}

	function onCellMouseOver(rowIdx: number, columnIdx: number) {
		if(isSelecting) {
			selection = selection.setEndPos(rowIdx, columnIdx)
		}
	}

	function selectRow(rowIdx: number) {
		selection = new Selection(rowIdx, 0, rowIdx, numColumns.get()-1);
	}

	function selectColumn(columnIdx: number) {
		selection = new Selection(0, columnIdx, numRows.get()-1, columnIdx);
	}

	function selectAll() {
		selection = new Selection(0, 0, numRows.get()-1, numColumns.get()-1);
	}

	function handleKeydown(e) {
		const key = e.key;
		if(key === 'ArrowUp') {
			selection = selection.collapse().translate(-1,0).constrain(0,0,numRows.get()-1,numColumns.get()-1);
		} else if(key === 'ArrowDown') {
			selection = selection.collapse().translate(1,0).constrain(0,0,numRows.get()-1,numColumns.get()-1);
		} else if(key === 'ArrowLeft') {
			selection = selection.collapse().translate(0,-1).constrain(0,0,numRows.get()-1,numColumns.get()-1);
		} else if(key === 'ArrowRight') {
			selection = selection.collapse().translate(0,1).constrain(0,0,numRows.get()-1,numColumns.get()-1);
		}
	}
</script>

<style lang="scss">
	$cell-border-color: rgb(187, 179, 179);
	$cell-border-width: 0.5px;
	$cell-selected-border-width: 1.8px;
	$cell-selected-border-color: rgb(55, 53, 59);
	$aux-border-color: rgb(214, 212, 212);
	$aux-bg-color: rgb(231, 231, 231);
	$aux-hover-bg-color: rgb(226, 213, 213);

	.wrapper {
		display: grid;
		align-content: stretch;
		padding-right: 0.01px; // Counteract selection border
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
		min-height: 25px;
		height: 25px;
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
		user-select: none;

		&:hover {
			background-color: $aux-hover-bg-color;
		}
	}
	.aux-cell-top {
		height: 20px;
		border-right: $cell-border-width solid $aux-border-color;
		border-bottom: $cell-border-width solid $cell-border-color;
	}
	.aux-cell-left {
		min-width: 20px;
		width: 20px;
		border-right: $cell-border-width solid $cell-border-color;
		border-bottom: $cell-border-width solid $aux-border-color;
	}
	.aux-cell-corner {
		border-right: $cell-border-width solid $aux-border-color;
		border-bottom: $cell-border-width solid $aux-border-color;
	}
</style>

<svelte:window on:keydown={handleKeydown} />

<div class="wrapper">
	<table>
		<tr class="aux-wrapper-top">
			<!-- Corner aux -->
			<td class="aux-cell aux-cell-corner"
				on:click={() => selectAll()}></td>

			<!-- Top aux -->
			{#each Array($numColumns) as _, columnIdx}
				<td class="aux-cell aux-cell-top"
					on:mousedown={() => selectColumn(columnIdx)}>
					{columnIdx+1}
			</td>
			{/each}
		</tr>

		<!-- Table content -->
		{#each $_table as row, rowIdx}
			<tr>
				<!-- Left aux -->
				<td class="aux-cell aux-cell-left"
					on:mousedown={() => selectRow(rowIdx)}>
					{rowIdx+1}
				</td>

				<!-- Row content -->
				{#each row as cell, columnIdx}
					<td class="cell"
						class:selection-top={selection?.atTopEdge(rowIdx, columnIdx)}
						class:selection-bottom={selection?.atBottomEdge(rowIdx, columnIdx)}
						class:selection-left={selection?.atLeftEdge(rowIdx, columnIdx)}
						class:selection-right={selection?.atRightEdge(rowIdx, columnIdx)}
						on:mousedown={() => onCellMouseDown(rowIdx, columnIdx)}
						on:mouseover={() => onCellMouseOver(rowIdx, columnIdx)}>
						{cell}
					</td>
				{/each}
			</tr>
		{/each}
	</table>
</div>