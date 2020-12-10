import { Alignment, columnAlignments } from './alignments-store';
import { tableStore } from './table-store';

export function generateMarkdownTable() {
	const table = tableStore.get();
	const alignments = columnAlignments.get();

	return table.rows.reduce((tableStr, row, rowIdx) => {
		let rowStr = row.reduce((rowStr, cell) => {
			return rowStr + ` ${cell} |`
		}, "|");

		tableStr = tableStr + rowStr + '\n';

		if(rowIdx === 0) {
			let sepStr = alignments.reduce((sepStr, alignment) => {
				if(alignment === Alignment.LEFT) return sepStr + ':-|';
				else if(alignment === Alignment.CENTER) return sepStr + ':-:|';
				else if(alignment === Alignment.RIGHT) return sepStr + '-:|';
			},"|");

			tableStr = tableStr + sepStr + '\n';
		}

		return tableStr;
	}, "")
}