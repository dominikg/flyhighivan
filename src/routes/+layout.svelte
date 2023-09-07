<script lang="ts">
	import 'sanitize.css';
	import 'sanitize.css/typography.css';
	import '../styles/global.css';
	import { language, languages, switchLanguage, loadResource } from '@inlang/sdk-js';
	const dob = new Date(Date.UTC(1995, 5, 29, 3, 0, 0, 0));
	const dop = new Date(Date.UTC(2023, 8, 26, 3, 0, 0, 0));
	let currentLang = language as string;

	async function changeLang(lang: string) {
		await switchLanguage(lang);
		currentLang = lang;
	}

	$: dateFormat = new Intl.DateTimeFormat(currentLang);
</script>

<header>
	{#each languages as lang}
		<!-- svelte-ignore a11y-mouse-events-have-key-events -->
		<button
			type="button"
			class:active={lang === currentLang}
			on:mouseover={() => loadResource(lang)}
			on:click={() => changeLang(lang)}
		>
			{lang}
		</button>
	{/each}
</header>
<main>
	<slot />
</main>
<footer>
	<span>Ivan Hofer</span>
	<span>* {dateFormat.format(dob)}</span>
	<span>† {dateFormat.format(dop)}</span>
</footer>

<style>
	header,
	footer {
		width: 100%;
		display: flex;
		gap: 1rem;
		align-items: center;
		justify-content: center;
		flex-wrap: wrap;
		padding: 0.5rem;
	}
	button {
		all: unset;
		text-transform: uppercase;
		cursor: pointer;
	}
	button.active,
	button:focus,
	button:hover {
		font-weight: bold;
	}
</style>
