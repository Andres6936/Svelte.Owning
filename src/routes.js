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
        name: 'empty',
        component: Empty,
    },
    {
        name: 'accordion',
        component: Accordion,
    },
    {
        name: 'blank',
        component: Blank,
    },
    {
        name: 'buttons',
        component: Buttons,
    },
    {
        name: 'cards',
        component: Cards,
    },
    {
        name: 'cards-masonry',
        component: CardsMasonry,
    },
    {
        name: 'colors',
        component: Colors,
    },
    {
        name: 'dropdowns',
        component: Dropdowns,
    },
    {
        name: 'icons',
        // component: Icons,
        component: Empty,
    },
    {
        name: 'modals',
        component: Modals,
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
    },
    {
        name: 'navigation',
        component: Navigation,
    },
    {
        name: 'charts',
        component: Charts,
    },
    {
        name: 'charts-heatmap',
        component: ChartsHeatmap,
    },
    {
        name: 'pagination',
        component: Pagination,
    },
    {
        name: 'skeleton',
        component: Skeleton,
    },
    {
        name: 'tabs',
        component: Tabs,
    },
    {
        name: 'tables',
        component: Tables,
    },
    {
        name: 'carousel',
        component: Carousel,
    },
    {
        name: 'lists',
        component: Lists,
    },
    {
        name: 'typography',
        component: Typography,
    },
    {
        name: 'page-headers',
        component: PageHeaders,
    },
    {
        name: 'markdown',
        component: Markdown,
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
    },
    {
        name: 'gallery',
        component: Gallery,
    },
    {
        name: 'invoice',
        component: Invoice,
    },
    {
        name: 'search-results',
        component: SearchResults,
    },
    {
        name: 'pricing',
        component: Pricing,
    },
    {
        name: 'users',
        component: Users,
    },
    {
        name: 'license',
        component: License,
    },
    {
        name: 'music',
        component: Music,
    },
    {
        name: 'widgets',
        component: Widgets,
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
