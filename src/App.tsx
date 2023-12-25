import { ContextInfo } from "./040_contextmanipulation/ContextInfo"
import { Router } from "./Router"
import { Menubar } from "./common/Menubar"
import { ApplicationContextProvider } from "./context/ApplicationContextProvider"

function App() {
    return (
        <ApplicationContextProvider>
            <div className="column-container grow">
                <Router></Router>
            </div>
            <Menubar></Menubar>
            <ContextInfo></ContextInfo>
        </ApplicationContextProvider>
    )
}

export default App;
