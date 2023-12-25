import { Dispatch, ReactNode, SetStateAction, createContext, useState } from "react"

type Payload = {
    email: string
    loggedIn: boolean
}

export const ApplicationContext = createContext<ApplicationContextType<Payload>|null>(null)

type ApplicationContextType<T> = {
    context: T,
    setContext: Dispatch<SetStateAction<T>>
}

export function ApplicationContextProvider(props: { children: ReactNode}) {

    const[context,setContext] = useState<Payload>({} as Payload)
    return (
        <ApplicationContext.Provider value={{ context,setContext }}>
            {props.children}
        </ApplicationContext.Provider>
    )
}

