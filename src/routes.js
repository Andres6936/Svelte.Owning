import Index from './Page/Index.svelte';
import Empty from './Page/Empty.svelte';
import Accordion from './Page/Accordion.svelte';
import CardsMasonry from './Page/CardsMasonry.svelte';
import Colors from './Page/Colors.svelte';
import ErrorMaintenance from './Page/ErrorMaintenance.svelte';
import Maps from './Page/Maps.svelte';
import Navigation from './Page/Navigation.svelte';
import SignIn from './Page/SignIn.svelte';
import TermsOfService from './Page/TermsOfService.svelte';
import Activity from './Page/Activity.svelte';
import Cards from './Page/Cards.svelte';
import Dropdowns from './Page/Dropdowns.svelte';
import ForgotPassword from './Page/ForgotPassword.svelte';
import Invoice from './Page/Invoice.svelte';
import MapsVector from './Page/MapsVector.svelte';
import PageHeaders from './Page/PageHeaders.svelte';
import SignUp from './Page/SignUp.svelte';
import Typography from './Page/Typography.svelte';
import AuthLock from './Page/AuthLock.svelte';
import Carousel from './Page/Carousel.svelte';
import FormElements from './Page/FormElements.svelte';
import License from './Page/License.svelte';
import Markdown from './Page/Markdown.svelte';
import Pagination from './Page/Pagination.svelte';
import Skeleton from './Page/Skeleton.svelte';
import Users from './Page/Users.svelte';
import Blank from './Page/Blank.svelte';
import ChartsHeatmap from './Page/ChartsHeatmap.svelte';
import Error404 from './Page/Error404.svelte';
import Gallery from './Page/Gallery.svelte';
import Lists from './Page/Lists.svelte';
import Modals from './Page/Modals.svelte';
import Pricing from './Page/Pricing.svelte';
import Tables from './Page/Tables.svelte';
import Widgets from './Page/Widgets.svelte';
import Buttons from './Page/Buttons.svelte';
import Charts from './Page/Charts.svelte';
import Error500 from './Page/Error500.svelte';
// import Icons from './Page/Icons.svelte';
import MapsFullsize from './Page/MapsFullsize.svelte';
import Music from './Page/Music.svelte';
import SearchResults from './Page/SearchResults.svelte';
import Tabs from './Page/Tabs.svelte';
import Wizard from './Page/Wizard.svelte';

import DashboardLayout from './Layout/DashboardLayout.svelte';

export const routes = [
    {
        name: '/',
        component: Index,
        layout: DashboardLayout,
    },
    {
        name: 'index',
        component: Index,
        layout: DashboardLayout,
    },
    {
        name: 'empty',
        component: Empty,
        layout: DashboardLayout,
    },
    {
        name: 'accordion',
        component: Accordion,
        layout: DashboardLayout,
    },
    {
        name: 'blank',
        component: Blank,
        layout: DashboardLayout,
    },
    {
        name: 'buttons',
        component: Buttons,
        layout: DashboardLayout,
    },
    {
        name: 'cards',
        component: Cards,
        layout: DashboardLayout,
    },
    {
        name: 'cards-masonry',
        component: CardsMasonry,
        layout: DashboardLayout,
    },
    {
        name: 'colors',
        component: Colors,
        layout: DashboardLayout,
    },
    {
        name: 'dropdowns',
        component: Dropdowns,
        layout: DashboardLayout,
    },
    {
        name: 'icons',
        // component: Icons,
        component: Empty,
    },
    {
        name: 'modals',
        component: Modals,
        layout: DashboardLayout,
    },
    {
        name: 'maps',
        component: Maps,
    },
    {
        name: 'maps-fullsize',
        component: MapsFullsize,
    },
    {
        name: 'maps-vector',
        component: MapsVector,
        layout: DashboardLayout,
    },
    {
        name: 'navigation',
        component: Navigation,
        layout: DashboardLayout,
    },
    {
        name: 'charts',
        component: Charts,
        layout: DashboardLayout,
    },
    {
        name: 'charts-heatmap',
        component: ChartsHeatmap,
        layout: DashboardLayout,
    },
    {
        name: 'pagination',
        component: Pagination,
        layout: DashboardLayout,
    },
    {
        name: 'skeleton',
        component: Skeleton,
        layout: DashboardLayout,
    },
    {
        name: 'tabs',
        component: Tabs,
        layout: DashboardLayout,
    },
    {
        name: 'tables',
        component: Tables,
        layout: DashboardLayout,
    },
    {
        name: 'carousel',
        component: Carousel,
        layout: DashboardLayout,
    },
    {
        name: 'lists',
        component: Lists,
        layout: DashboardLayout,
    },
    {
        name: 'typography',
        component: Typography,
        layout: DashboardLayout,
    },
    {
        name: 'page-headers',
        component: PageHeaders,
        layout: DashboardLayout,
    },
    {
        name: 'markdown',
        component: Markdown,
        layout: DashboardLayout,
    },
    {
        name: 'sign-in',
        component: SignIn,
    },
    {
        name: 'sign-up',
        component: SignUp,
    },
    {
        name: 'forgot-password',
        component: ForgotPassword,
    },
    {
        name: 'terms-of-service',
        component: TermsOfService,
    },
    {
        name: 'auth-lock',
        component: AuthLock,
    },
    {
        name: 'error-404',
        component: Error404,
    },
    {
        name: 'error-500',
        component: Error500,
    },
    {
        name: 'error-maintenance',
        component: ErrorMaintenance,
    },
    {
        name: 'form-elements',
        component: FormElements,
    },
    {
        name: 'activity',
        component: Activity,
        layout: DashboardLayout,
    },
    {
        name: 'gallery',
        component: Gallery,
        layout: DashboardLayout,
    },
    {
        name: 'invoice',
        component: Invoice,
        layout: DashboardLayout,
    },
    {
        name: 'search-results',
        component: SearchResults,
        layout: DashboardLayout,
    },
    {
        name: 'pricing',
        component: Pricing,
        layout: DashboardLayout,
    },
    {
        name: 'users',
        component: Users,
        layout: DashboardLayout,
    },
    {
        name: 'license',
        component: License,
        layout: DashboardLayout,
    },
    {
        name: 'music',
        component: Music,
        layout: DashboardLayout,
    },
    {
        name: 'widgets',
        component: Widgets,
        layout: DashboardLayout,
    },
    {
        name: 'wizard',
        component: Wizard,
    },
    {
        name: 'layout-horizontal',
        component: Empty,
    },
    {
        name: 'layout-vertical',
        component: Empty,
    },
    {
        name: 'layout-vertical-transparent',
        component: Empty,
    },
    {
        name: 'layout-vertical-right',
        component: Empty,
    },
    {
        name: 'layout-condensed',
        component: Empty,
    },
    {
        name: 'layout-condensed-dark',
        component: Empty,
    },
    {
        name: 'layout-combo',
        component: Empty,
    },
    {
        name: 'layout-navbar-dark',
        component: Empty,
    },
    {
        name: 'layout-navbar-sticky',
        component: Empty,
    },
    {
        name: 'layout-navbar-overlap',
        component: Empty,
    },
    {
        name: 'layout-dark',
        component: Empty,
    },
    {
        name: 'layout-rtl',
        component: Empty,
    },
    {
        name: 'layout-fluid',
        component: Empty,
    },
    {
        name: 'layout-fluid-vertical',
        component: Empty,
    },
    {
        name: 'docs/index',
        component: Empty,
    },
];
