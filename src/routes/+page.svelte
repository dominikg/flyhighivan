<script lang="ts">
	import { language, i } from '@inlang/sdk-js';
</script>

<div>
	<h1 lang={language} dir="auto">{i('in-memoriam')}</h1>
</div>

<style>
	div {
		position: relative;
		height: 100%;
	}
	h1 {
		position: absolute;
		top: 61.8%;
		padding: 1rem;
		width: 100%;
		text-align: center;
		font-size: 1.5rem;
	}
	@media screen and (min-width: 640px) {
		h1 {
			font-size: 2rem;
		}
	}
</style>
