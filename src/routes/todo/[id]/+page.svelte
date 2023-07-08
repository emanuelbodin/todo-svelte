<script>
    export let data
</script>

<h2>{data.todo.title}</h2>
<input type="checkbox" bind:checked={data.todo.completed}/>