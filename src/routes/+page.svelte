<script>
	export let data;
	export let form;
</script>

<svelte:head>
	<title>Todo</title>
	<meta name="description" content="Create a todo" />
</svelte:head>

<section class="flex flex-col justify-center align-center">

	<h1>Todos</h1>
	{#if form?.error}
	<p class="text-red">{form.error}</p>
	{/if}
	<form class="mb-4" method="post" action="?/create">
		<label for="title">add a todo:</label>
		<input name="title" autocomplete="off" required value={form?.title ?? ''}/>
	</form>

	<h2>
		Your todos
	</h2>
	{#each data.todos as {id,title, completed} (id)}
		<div class="flex gap-1">
		<form method="post" action="?/delete">
			<div class="flex gap-2 items-center">
			<input type="hidden" name="id" value={id}/>
			<a class="text-black text-lg" href="/todo/{id}">{title}</a>
			<p>Status:<p><p class='text-green-700'>{completed ? 'Completed' : 'In progress'}</p>
			<button class="bg-stone-900 text-white p-2 rounded" aria-label="Mark as complete">Complete</button>
		</div>
		</form>
		</div>
	{/each}
</section>
