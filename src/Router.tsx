
import { createBrowserRouter, Outlet, RouteObject, RouterProvider, } from 'react-router-dom';
import { Button } from './001_button/Button'
import { Banner } from './004_banner/Banner'
import { StyledBanner } from './005_styles/StyledBanner'
import { Loop } from './008_loop/Loop'
import { LoopAnimated } from './009_loopanimated/LoopAnimated'
import { ChangeDom } from './020_changedom/ChangeDom'
import { Counter } from './015_counter/Counter'
import { WindowListener } from './021_windowlistener/WindowListener'
import { Expandable } from './030_expandable/Expandable'
import { makeLongText } from './common/util'
import { CustomExpandable } from './031_customexpandable/CustomExpandable'
import { NativeEvents } from './035_nativeevents/NativeEvents'
import { ContextManipulation } from './040_contextmanipulation/ContextManipulation'
import { ModalTest } from './045_modal/ModalTest'
import { SimpleForm } from './050_simpleform/SimpleForm'
import { Menubar } from './common/Menubar'
import { FetchData } from './060_fetchdata/FetchData'
import { FetchDataSuspense } from './061_fetchdata_suspense/FetchDataSuspense'
import { StyledExpandable } from './032_styledexpandable/StylesExpandable'

function Content() {
    return (
        <>
        <div className="column-container grow">
            <Outlet></Outlet>
        </div>
        <Menubar></Menubar>
        </>
    )
}


export const allroutes: RouteObject[] = [
    {
        path: '/',
        element: <Content></Content>,
        children: [
            {
                path: '/',
                element: <h1>React Übungen</h1>
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
            {
                path: '/loopanimated',
                element: <LoopAnimated></LoopAnimated>
            },
            {
                path: '/counter',
                element: <Counter></Counter>
            },
            {
                path: '/changedom',
                element: <ChangeDom></ChangeDom>
            },
            {
                path: '/windowlistener',
                element: <WindowListener></WindowListener>
            },
            {
                path: '/expandable',
                element: <Expandable title="Hello zusammen" body={makeLongText(10)}></Expandable>
            },
            {
                path: '/customexpandable',
                element: <CustomExpandable title="Hello zusammen"><h1>Hello There</h1><p>I am custom content</p></CustomExpandable>
            },
            {
                path: '/styledexpandable',
                element: <StyledExpandable title="Hello zusammen" className="red reallyround">
                    <h1>Hello There</h1><p>I am styled content</p>
                </StyledExpandable>
            },
            {
                path: '/nativeevents',
                element: <NativeEvents/>
            },
            {
                path: '/contextmanipulation',
                element: <ContextManipulation/>
            },
            {
                path: '/modal',
                element: <ModalTest/>
            },
            {
                path: '/simpleform',
                element: <SimpleForm/>
            },
            {
                path: '/fetchdata',
                element: <FetchData/>
            },
            {
                path: '/fetchdatasuspense',
                element: <FetchDataSuspense/>
            },
        ]
    },
]

const router = createBrowserRouter(allroutes)

export function Router() {
    return <RouterProvider router={router} />
}
