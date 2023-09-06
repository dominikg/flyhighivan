<script lang="ts">
	import 'sanitize.css';
	import 'sanitize.css/typography.css';
	import '../styles/global.css';
	import { languages } from '@inlang/sdk-js';
	import { page } from '$app/stores';
	const dob = new Date(Date.UTC(1995, 5, 29, 3, 0, 0, 0));
	const dop = new Date(Date.UTC(2023, 8, 26, 3, 0, 0, 0));
	$: currentLang = $page.params.lang;
	$: dateFormat = new Intl.DateTimeFormat(currentLang);
</script>

<header>
	<nav>
		{#each languages as language}
			<a class:active={language === currentLang} href="/{language}">{language}</a>
		{/each}
	</nav>
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
	nav,
	footer {
		width: 100%;
		display: flex;
		gap: 1rem;
		align-items: center;
		justify-content: center;
		flex-wrap: wrap;
		padding: 0.5rem;
	}
	a {
		text-transform: uppercase;
		color: currentColor;
		text-decoration: none;
	}
	a.active,
	a:focus,
	a:hover {
		font-weight: bold;
	}
	a:visited {
		color: currentColor;
	}
</style>
