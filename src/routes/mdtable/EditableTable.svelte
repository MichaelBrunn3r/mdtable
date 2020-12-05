<script>
	import EditableCell from './EditableCell.svelte';

	export let header = ["Tables", "Are", "Cool"];
	export let rows = [['1', '2', '3'], ['4', '5', '6'], ['7', '8', '9']];
</script>

<style>
	tbody tr:nth-child(even) {
		background-color: #f6f8fa;
	}
	tr {
		height: 35px;
	}

	button {
		font-size: 20px;
		border: none;
		background: none;
		padding: 0 8px;
	}

	.wrapper-horizontal {
		display: flex;
		justify-content: center;
		margin-left: 30px;
	}

	.wrapper-vertical {
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	#btn-add-col {
		margin-bottom: 30px;
	}
</style>

<div class="wrapper-horizontal">
	<div class="wrapper-vertical">
		<table>
			<thead>
				<tr>
					{#each header as entry,i}
						<EditableCell bind:value={entry} isHeader=true/>
					{/each}
				</tr>
			</thead>
			<tbody>
				{#each rows as row,i}
					<tr>
						{#each row as entry,k}
							<EditableCell bind:value={entry}/>
						{/each}
					</tr>
				{/each}
			</tbody>
		</table>
		<button type="button" class="btn"><i class="far fa-plus-square"></i></button>
	</div>
	<button id="btn-add-col" type="button" class="btn"><i class="far fa-plus-square"></i></button>
</div>