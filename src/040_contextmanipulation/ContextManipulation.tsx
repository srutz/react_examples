import { useApplicationContext } from "../context/ApplicationContext"


export function ContextManipulation() {

    const { context, setContext } =  useApplicationContext()

    const onLogin = () => {
        setContext({
            email: "stepan.rutz@gmx.de",
            loggedIn: true
        })
    }
    const onLogout = () => {
        setContext({
            email: "",
            loggedIn: false
        })
    }

    return (
        <>
        <button disabled={context.loggedIn} onClick={onLogin}>Log-In</button>
        <button disabled={!context.loggedIn} onClick={onLogout}>Log-Out</button>
        </>
    )
}