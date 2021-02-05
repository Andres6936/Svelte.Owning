import Index from './Page/Index.svelte';
import Empty from './Page/Empty.svelte';

export const routes = [
    {
        name: '/',
        component: Index,
    },
    {
        name: 'empty',
        component: Empty,
    },
];
