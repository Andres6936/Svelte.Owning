<script>
    import InputLabel from './InputLabel.svelte';
</script>

<form>
    <div class="mb-3">
        <InputLabel text="Email address" type="email" id="svo-input-email"/>
        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
    </div>
    <div class="mb-3">
        <InputLabel text="Password" type="password" id="svo-input-password"/>
    </div>
    <div class="mb-3 form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1">
        <label class="form-check-label" for="exampleCheck1">Check me out</label>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
</form>
