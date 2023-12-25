import { useContext } from "react"
import { ApplicationContext } from "./ApplicationContextProvider"


export function useApplicationContext() {
    const context = useContext(ApplicationContext)
    if (!context) {
        throw new Error("context not available here")
    }
    return context
}
