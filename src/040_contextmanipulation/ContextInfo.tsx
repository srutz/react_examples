import { useApplicationContext } from "../context/ApplicationContext"
import classes from "./ContextInfo.module.css"

export function ContextInfo() {
    const { context } = useApplicationContext()

    if (!context.loggedIn) {
        return null
    }

    return (
        <div className={classes.contextinfo}>
            User: {context.email}
        </div>
    )
}