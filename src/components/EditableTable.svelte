<script lang="ts">
	import { tableStore as _table } from '../data/table-store';
	import { columnAlignments } from '../data/alignments-store';
	import { selection, focusedCell } from '../data/selection-store';
	import EditableCell from '../components/EditableCell.svelte';

	let isSelecting = false;

	// Document listeners
	let mouseUpListener = () => {
		isSelecting = false;
		document.removeEventListener('mouseup', mouseUpListener);
	}

	function onCellMouseDown(rowIdx: number, columnIdx: number) {
		selection.selectCell(columnIdx, rowIdx);
		isSelecting = true;
		document.addEventListener('mouseup', mouseUpListener);
	}

	function onCellMouseOver(rowIdx: number, columnIdx: number) {
		if(isSelecting) {
			selection.update(s => s.setEndPos(columnIdx, rowIdx));
		}
	}

	function handleKeydown(e) {
		const key = e.key;
		if(key === 'ArrowUp') {
			selection.moveUp();
		} else if(key === 'ArrowDown') {
			selection.moveDown();
		} else if(key === 'ArrowLeft') {
			selection.moveLeft();
		} else if(key === 'ArrowRight') {
			selection.moveRight();
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
		justify-content: center;
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
				on:click={() => selection.selectAll()}></td>

			<!-- Top aux -->
			{#each Array($_table.numColumns) as _, columnIdx}
				<td class="aux-cell aux-cell-top"
					on:mousedown={() => selection.selectColumn(columnIdx)}>
					{columnIdx+1}
			</td>
			{/each}
		</tr>

		<!-- Table content -->
		{#each $_table.rows as row, rowIdx}
			<tr>
				<!-- Left aux -->
				<td class="aux-cell aux-cell-left"
					on:mousedown={() => selection.selectRow(rowIdx)}>
					{rowIdx+1}
				</td>

				<!-- Row content -->
				{#each row as cell, columnIdx}
					<td class="cell"
						class:selection-top={$selection.atTopEdge(columnIdx, rowIdx)}
						class:selection-bottom={$selection.atBottomEdge(columnIdx, rowIdx)}
						class:selection-left={$selection.atLeftEdge(columnIdx, rowIdx)}
						class:selection-right={$selection.atRightEdge(columnIdx, rowIdx)}
						on:mousedown={() => onCellMouseDown(rowIdx, columnIdx)}
						on:mouseover={() => onCellMouseOver(rowIdx, columnIdx)}>

						<EditableCell
							bind:value={cell}
							isSelected={$focusedCell.equals(columnIdx, rowIdx)}
							alignment={$columnAlignments[columnIdx]}
							/>
					</td>
				{/each}
			</tr>
		{/each}
	</table>
</div>