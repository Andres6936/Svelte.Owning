<script>
    // @type {string} Extra class for the table tag.
    export let extraClass = '';
    // @type {[string]} List of string with the name of each header in the table.
    export let headers = [];
</script>

<table class="table {extraClass}">
    <thead>
    <tr>
        {#each headers as header}
            <th>{header}</th>
        {/each}
    </tr>
    </thead>
    <tbody>
    <slot/>
    </tbody>
</table>
