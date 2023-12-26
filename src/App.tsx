import { Outlet } from "react-router-dom"
import { ContextInfo } from "./040_contextmanipulation/ContextInfo"
import { Router } from "./Router"
import { Menubar } from "./common/Menubar"
import { ApplicationContextProvider } from "./context/ApplicationContextProvider"

export function App() {
    return (
        <ApplicationContextProvider>
            <Router></Router>
            <ContextInfo></ContextInfo>
        </ApplicationContextProvider>
    )
}

