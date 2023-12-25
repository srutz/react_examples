import { Dispatch, ReactNode, SetStateAction, createContext, useState } from "react"



type ApplicationContextType = {
    context: string,
    setContext: Dispatch<SetStateAction<string>>
}

export const ApplicationContext = createContext<ApplicationContextType|null>(null)


export function ApplicationContextProvider(props: { children: ReactNode}) {

    const[context,setContext] = useState("yo")
    return (
        <ApplicationContext.Provider value={{ context,setContext }}>
            {props.children}
        </ApplicationContext.Provider>
    )
}
