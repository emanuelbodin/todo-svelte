<script>
	import '../app.postcss';
	import Header from './Header.svelte';
	import './styles.css';
</script>

<div class="flex flex-col min-h-screen">
	<Header />

	<main class="flex flex-col w-100 p-4 grow mx-auto box-border">
		<slot />
	</main>

	<footer class="flex flex-col justify-center align-center p-3 sm:px-3">
		<p>visit <a class="font-bold" href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</p>
	</footer>
</div>
