import { Router } from "./Router"
import { Menubar } from "./common/Menubar"

function App() {
    return (
        <>
            <div className="column-container grow">
                <Router></Router>
            </div>
            <Menubar></Menubar>
        </>
    );
}

export default App;
