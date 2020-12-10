<script lang="ts">
	import { Alignment, alignColumns, columnAlignments } from '../data/alignments-store';
	import { selection } from '../data/selection-store';
	import { range } from '../data/utils';
	import { generateMarkdownTable } from '../data/markdown';

	function alignSelectedColumns(alignment: Alignment) {
		const s = selection.get();
		alignColumns(range(s.startPos.x, s.endPos.x+1), alignment);
	}

	function copyMarkdownTableToClipboard() {
		navigator.clipboard.writeText(generateMarkdownTable());
	}

</script>

<style>
	.avatar {
		width: 30px;
		height: 30px;
	}
</style>

<nav class="navbar navbar-dark bg-dark justify-content-between">
	<a class="navbar-brand" href="/">
		<img class="avatar rounded-circle" src="https://avatars2.githubusercontent.com/u/19626539?s=80" alt="Avatar" loading="lazy">
		mdtable
	</a>
	<div>
		<button
			type="button"
			class="btn"
			aria-label="Align column left"
			on:click={() => alignSelectedColumns(Alignment.LEFT)}
			>
			<i aria-hidden="true" class="fas fa-align-left text-light"></i>
		</button>
		<button
			type="button"
			class="btn"
			aria-label="Align column center"
			on:click={() => alignSelectedColumns(Alignment.CENTER)}
			>
			<i aria-hidden="true" class="fas fa-align-center text-light"></i>
		</button>
		<button
			type="button"
			class="btn"
			aria-label="Align column right"
			on:click={() => alignSelectedColumns(Alignment.RIGHT)}
			>
			<i aria-hidden="true" class="fas fa-align-right text-light"></i>
		</button>
		<button
			type="button"
			class="btn"
			aria-label="Copy to Clipboard"
			on:click={copyMarkdownTableToClipboard}
			>
			<i aria-hidden="true" class="fas fa-copy text-light"></i>
		</button>
	</div>
</nav>