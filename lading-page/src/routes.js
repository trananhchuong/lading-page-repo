import { lazy } from 'react';

const HomePage = lazy(() => import('./components/homePage/HomePage'));

export const Routes = [
    { id: '/', component: HomePage },
];



