<script>
    import Navigation from "../Navigation.svelte";
    import Header from "../Header.svelte";
    import Footer from "../Footer.svelte";
</script>

<div class="page">
    <Header/>
    <Navigation/>
    <div class="content">
        <div class="container-xl">
            <!-- Page title -->
            <div class="page-header d-print-none">
                <div class="row align-items-center">
                    <div class="col">
                        <h2 class="page-title">
                            Empty page
                        </h2>
                    </div>
                </div>
            </div>
            <!-- Content here -->
        </div>
        <Footer/>
    </div>
</div>
