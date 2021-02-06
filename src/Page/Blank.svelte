<script>
    import Navigation from "../Navigation.svelte";
</script>
<div class="page">
    <Navigation/>
    <div class="content">
        <div class="container-xl d-flex flex-column justify-content-center">
            <div class="empty">
                <div class="empty-img"><img src="./static/illustrations/undraw_printing_invoices_5r4r.svg" height="128"
                                            alt="">
                </div>
                <p class="empty-title">No results found</p>
                <p class="empty-subtitle text-muted">
                    Try adjusting your search or filter to find what you're looking for.
                </p>
                <div class="empty-action">
                    <a href="./." class="btn btn-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24"
                             stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
                             stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <line x1="12" y1="5" x2="12" y2="19"/>
                            <line x1="5" y1="12" x2="19" y2="12"/>
                        </svg>
                        Add your first client
                    </a>
                </div>
            </div>
        </div>
        <footer class="footer footer-transparent d-print-none">
            <div class="container">
                <div class="row text-center align-items-center flex-row-reverse">
                    <div class="col-lg-auto ms-lg-auto">
                        <ul class="list-inline list-inline-dots mb-0">
                            <li class="list-inline-item"><a href="./docs/index.html" class="link-secondary">Documentation</a>
                            </li>
                            <li class="list-inline-item"><a href="./license.html" class="link-secondary">License</a>
                            </li>
                            <li class="list-inline-item"><a href="https://github.com/tabler/tabler" target="_blank"
                                                            class="link-secondary" rel="noopener">Source code</a></li>
                        </ul>
                    </div>
                    <div class="col-12 col-lg-auto mt-3 mt-lg-0">
                        <ul class="list-inline list-inline-dots mb-0">
                            <li class="list-inline-item">
                                Copyright &copy; 2021
                                <a href="." class="link-secondary">Tabler</a>.
                                All rights reserved.
                            </li>
                            <li class="list-inline-item">
                                <a href="./changelog.html" class="link-secondary" rel="noopener">v1.0.0-alpha.22</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</div>
