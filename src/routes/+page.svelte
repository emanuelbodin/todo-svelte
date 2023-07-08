<script>
	export let data;
</script>

<svelte:head>
	<title>Todo</title>
	<meta name="description" content="Create a todo" />
</svelte:head>

<section class="flex flex-col justify-center align-center">

	<h1>Todos</h1>
	<form class="mb-4" method="post" action="?/create">
		<label for="title">add a todo:</label>
		<input name="title" autocomplete="off"/>
	</form>

	<h2>
		Your todos
	</h2>
	{#each data.todos as {id,title, completed} (id)}
		<div class="flex gap-1">
		<form method="post" action="?/delete">
			<input type="hidden" name="id" value={id}/>
			<a href="/todo/{id}">{title}</a>
			<button aria-label="Mark as complete">Complete</button>
		</form>
		</div>
	{/each}
</section>
