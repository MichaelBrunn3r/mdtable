<script>
	export let isHeader = false;
	export let value = "";

	const initValue = value;

	function valueChanged(e) {
		let newVal = e.target.innerText;

		// Clean up redundant newline
		if(newVal.charAt(newVal.length-1) == '\n') {
			newVal = newVal.substr(0, newVal.length-1);
		}

		value = newVal;
	}
</script>

<style>
	.input {
		min-width: 30px;
		min-height: 30px;
		width: fit-content;
		height: fit-content;
	}
</style>

<div class="input" innerText={value} on:input={valueChanged} contenteditable={true}></div>