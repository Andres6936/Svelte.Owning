<script>
    export let id;
    export let type;
    export let text;
</script>

<label class="form-label">
    {text}
    <input {type} class="form-control" {id}>
</label>
