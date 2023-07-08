<script>
    export let data
</script>

<div>
    <slot/>
    <aside>
        <h2>All posts</h2>
        <ul>
{#each data.todos as {id,title}}
<li><a href="/todo/{id}">{title}</a></li>
{/each}
        </ul>
    </aside>
</div>