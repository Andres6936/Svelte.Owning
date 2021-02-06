<script>
    import {Route} from 'svelte-router-spa'
    import Header from "../Header.svelte";
    import Footer from "../Footer.svelte";
    import Navigation from "../Navigation.svelte";

    // Every Route file will receive a currentRoute property with information
    // about the current route, params, queries, etc.
    export let currentRoute
    const params = {}
</script>

<div class="page">
    <Header/>
    <Navigation/>
    <div class="content">
        <Route.default {currentRoute} {params}/>
        <Footer/>
    </div>
</div>
