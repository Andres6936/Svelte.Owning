<script>
    import Svg24 from "./SVG/Svg24.svelte";
</script>
<div class="navbar-expand-md">
    <div class="collapse navbar-collapse" id="navbar-menu">
        <div class="navbar navbar-light">
            <div class="container-xl">
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <a class="nav-link" href="/">
                    <span class="nav-link-icon d-md-none d-lg-inline-block">
                        <Svg24>
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <polyline points="5 12 3 12 12 3 21 12 19 12"/>
                            <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7"/>
                            <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6"/>
                        </Svg24>
                    </span>
                            <span class="nav-link-title">
                      Home
                    </span>
                        </a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#navbar-base" data-bs-toggle="dropdown"
                           role="button" aria-expanded="false">
                    <span class="nav-link-icon d-md-none d-lg-inline-block">
                        <Svg24>
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <polyline points="12 3 20 7.5 20 16.5 12 21 4 16.5 4 7.5 12 3"/>
                            <line x1="12" y1="12" x2="20" y2="7.5"/>
                            <line x1="12" y1="12" x2="12" y2="21"/>
                            <line x1="12" y1="12" x2="4" y2="7.5"/>
                            <line x1="16" y1="5.25" x2="8" y2="9.75"/>
                        </Svg24>
                    </span>
                            <span class="nav-link-title">
                      Interface
                    </span>
                        </a>
                        <div class="dropdown-menu">
                            <div class="dropdown-menu-columns">
                                <div class="dropdown-menu-column">
                                    <a class="dropdown-item" href="empty">
                                        Empty page
                                    </a>
                                    <a class="dropdown-item" href="accordion">
                                        Accordion
                                    </a>
                                    <a class="dropdown-item" href="blank">
                                        Blank page
                                    </a>
                                    <a class="dropdown-item" href="buttons">
                                        Buttons
                                    </a>
                                    <a class="dropdown-item" href="cards">
                                        Cards
                                    </a>
                                    <a class="dropdown-item" href="cards-masonry">
                                        Cards Masonry
                                    </a>
                                    <a class="dropdown-item" href="colors">
                                        Colors
                                    </a>
                                    <a class="dropdown-item" href="dropdowns">
                                        Dropdowns
                                    </a>
                                    <a class="dropdown-item" href="icons">
                                        Icons
                                    </a>
                                    <a class="dropdown-item" href="modals">
                                        Modals
                                    </a>
                                    <a class="dropdown-item" href="maps">
                                        Maps
                                    </a>
                                    <a class="dropdown-item" href="maps-fullsize">
                                        Map fullsize
                                    </a>
                                    <a class="dropdown-item" href="maps-vector">
                                        Vector maps
                                    </a>
                                    <a class="dropdown-item" href="navigation">
                                        Navigation
                                    </a>
                                </div>
                                <div class="dropdown-menu-column">
                                    <a class="dropdown-item" href="charts">
                                        Charts
                                    </a>
                                    <a class="dropdown-item" href="charts-heatmap">
                                        Charts heatmap
                                    </a>
                                    <a class="dropdown-item" href="pagination">
                                        Pagination
                                    </a>
                                    <a class="dropdown-item" href="skeleton">
                                        Skeleton
                                    </a>
                                    <a class="dropdown-item" href="tabs">
                                        Tabs
                                    </a>
                                    <a class="dropdown-item" href="tables">
                                        Tables
                                    </a>
                                    <a class="dropdown-item" href="carousel">
                                        Carousel
                                    </a>
                                    <a class="dropdown-item" href="lists">
                                        Lists
                                    </a>
                                    <a class="dropdown-item" href="typography">
                                        Typography
                                    </a>
                                    <a class="dropdown-item" href="page-headers">
                                        Page headers
                                    </a>
                                    <a class="dropdown-item" href="markdown">
                                        Markdown
                                    </a>
                                    <div class="dropend">
                                        <a class="dropdown-item dropdown-toggle" href="#sidebar-authentication"
                                           data-bs-toggle="dropdown" role="button" aria-expanded="false">
                                            Authentication
                                        </a>
                                        <div class="dropdown-menu">
                                            <a href="sign-in" class="dropdown-item">Sign in</a>
                                            <a href="sign-up" class="dropdown-item">Sign up</a>
                                            <a href="forgot-password" class="dropdown-item">Forgot
                                                password</a>
                                            <a href="terms-of-service" class="dropdown-item">Terms of
                                                service</a>
                                            <a href="auth-lock" class="dropdown-item">Lock screen</a>
                                        </div>
                                    </div>
                                    <div class="dropend">
                                        <a class="dropdown-item dropdown-toggle" href="#sidebar-error"
                                           data-bs-toggle="dropdown" role="button" aria-expanded="false">
                                            Error pages
                                        </a>
                                        <div class="dropdown-menu">
                                            <a href="error-404" class="dropdown-item">404 page</a>
                                            <a href="error-500" class="dropdown-item">500 page</a>
                                            <a href="error-maintenance" class="dropdown-item">Maintenance
                                                page</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="form-elements">
                    <span class="nav-link-icon d-md-none d-lg-inline-block">
                        <Svg24>
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <polyline points="9 11 12 14 20 6"/>
                            <path d="M20 12v6a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h9"/>
                        </Svg24>
                    </span>
                            <span class="nav-link-title">
                      Form elements
                    </span>
                        </a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#navbar-extra" data-bs-toggle="dropdown"
                           role="button" aria-expanded="false">
                    <span class="nav-link-icon d-md-none d-lg-inline-block">
                        <Svg24>
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"/>
                        </Svg24>
                    </span>
                            <span class="nav-link-title">
                      Extra
                    </span>
                        </a>
                        <div class="dropdown-menu">
                            <a class="dropdown-item" href="activity">
                                Activity
                            </a>
                            <a class="dropdown-item" href="gallery">
                                Gallery
                            </a>
                            <a class="dropdown-item" href="invoice">
                                Invoice
                            </a>
                            <a class="dropdown-item" href="search-results">
                                Search results
                            </a>
                            <a class="dropdown-item" href="pricing">
                                Pricing cards
                            </a>
                            <a class="dropdown-item" href="users">
                                Users
                            </a>
                            <a class="dropdown-item" href="license">
                                License
                            </a>
                            <a class="dropdown-item" href="music">
                                Music
                            </a>
                            <a class="dropdown-item" href="widgets">
                                Widgets
                            </a>
                            <a class="dropdown-item" href="wizard">
                                Wizard
                            </a>
                        </div>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#navbar-layout" data-bs-toggle="dropdown"
                           role="button" aria-expanded="false">
                    <span class="nav-link-icon d-md-none d-lg-inline-block">
                        <Svg24>
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <rect x="4" y="4" width="6" height="5" rx="2"/>
                            <rect x="4" y="13" width="6" height="7" rx="2"/>
                            <rect x="14" y="4" width="6" height="7" rx="2"/>
                            <rect x="14" y="15" width="6" height="5" rx="2"/>
                        </Svg24>
                    </span>
                            <span class="nav-link-title">
                      Layout
                    </span>
                        </a>
                        <div class="dropdown-menu">
                            <div class="dropdown-menu-columns">
                                <div class="dropdown-menu-column">
                                    <a class="dropdown-item" href="layout-horizontal">
                                        Horizontal
                                    </a>
                                    <a class="dropdown-item" href="layout-vertical">
                                        Vertical
                                    </a>
                                    <a class="dropdown-item" href="layout-vertical-transparent">
                                        Vertical transparent
                                    </a>
                                    <a class="dropdown-item" href="layout-vertical-right">
                                        Right vertical
                                    </a>
                                    <a class="dropdown-item" href="layout-condensed">
                                        Condensed
                                    </a>
                                    <a class="dropdown-item" href="layout-condensed-dark">
                                        Condensed dark
                                    </a>
                                    <a class="dropdown-item" href="layout-combo">
                                        Combined
                                    </a>
                                </div>
                                <div class="dropdown-menu-column">
                                    <a class="dropdown-item" href="layout-navbar-dark">
                                        Navbar dark
                                    </a>
                                    <a class="dropdown-item" href="layout-navbar-sticky">
                                        Navbar sticky
                                    </a>
                                    <a class="dropdown-item" href="layout-navbar-overlap">
                                        Navbar overlap
                                    </a>
                                    <a class="dropdown-item" href="layout-dark">
                                        Dark mode
                                    </a>
                                    <a class="dropdown-item" href="layout-rtl">
                                        RTL mode
                                    </a>
                                    <a class="dropdown-item" href="layout-fluid">
                                        Fluid
                                    </a>
                                    <a class="dropdown-item" href="layout-fluid-vertical">
                                        Fluid vertical
                                    </a>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="docs/index">
                    <span class="nav-link-icon d-md-none d-lg-inline-block">
                        <Svg24>
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M14 3v4a1 1 0 0 0 1 1h4"/>
                            <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"/>
                            <line x1="9" y1="9" x2="10" y2="9"/>
                            <line x1="9" y1="13" x2="15" y2="13"/>
                            <line x1="9" y1="17" x2="15" y2="17"/>
                        </Svg24>
                    </span>
                            <span class="nav-link-title">
                      Documentation
                    </span>
                        </a>
                    </li>
                </ul>
                <div class="my-2 my-md-0 flex-grow-1 flex-md-grow-0 order-first order-md-last">
                    <form action="." method="get">
                        <div class="input-icon">
                    <span class="input-icon-addon">
                      <Svg24>
                          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                          <circle cx="10" cy="10" r="7"/>
                          <line x1="21" y1="21" x2="15" y2="15"/>
                      </Svg24>
                    </span>
                            <input type="text" class="form-control" placeholder="Search…"
                                   aria-label="Search in website">
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
