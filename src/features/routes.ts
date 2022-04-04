import { lazy } from 'react';

const routes = [
    {
        path: 'todos',
        component: lazy(() => import('./todos/Todos')),
        exact: true
    }
];


export default routes;
