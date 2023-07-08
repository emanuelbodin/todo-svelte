<script>
	export let data;
</script>

<svelte:head>
	<title>Todo</title>
	<meta name="description" content="Create a todo" />
</svelte:head>

<section class="flex flex-col justify-center align-center">

	<h1>Todos</h1>
	<form class="mb-4" method="post">
		<label for="title">add a todo:</label>
		<input name="title" autocomplete="off"/>
	</form>

	<h2>
		Your todos
	</h2>
	{#each data.todos as {id,title, completed}}
		<div class="flex gap-1"><a href="/todo/{id}">{title}</a><input bind:checked={completed} type="checkbox"></div>
	{/each}
</section>
