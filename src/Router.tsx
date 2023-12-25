
import { createBrowserRouter, RouterProvider, } from 'react-router-dom';
import { Button } from './001_button/Button'
import { Banner } from './004_banner/Banner'
import { StyledBanner } from './005_styles/StyledBanner'
import { Loop } from './008_loop/Loop'

const router = createBrowserRouter([
    {
        path: '/',
        element: <h1>Welcome</h1>,
    },
    {
        path: '/button',
        element: <Button></Button>,
    },
    {
        path: '/banner',
        element: <Banner text='Hello World' visible></Banner>,
    },
    {
        path: '/styles',
        element: <StyledBanner text='Hello World' size={64} ></StyledBanner>,
    },
    {
        path: '/loop',
        element: <Loop></Loop>
    },
]);

export function Router() {
    return <RouterProvider router={router} />;
}
