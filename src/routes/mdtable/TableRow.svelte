<script>
	import EditableCell from './EditableCell.svelte';

	export let isHeader = false;
	export let entries;
</script>

{#each entries as entry}
	<EditableCell {isHeader} value={entry} />
{/each}