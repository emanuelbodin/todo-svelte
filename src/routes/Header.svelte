<script>
	import { page } from '$app/stores';
</script>

<header class="flex justify-between">
	<div class="p-2">
		<a href="/">
			Logo
		</a>
	</div>

	<nav class="flex justify-center ">
		<ul class="flex gap-3">
			<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/">Home</a>
			</li>
		</ul>
	</nav>
	<button>login</button>
</header>
