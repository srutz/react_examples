import { ReactNode, useEffect, useState } from "react"
import classes from "./CustomExpandable.module.css"



// show detructuring and generics
export type ChildrenProps = {
    children: ReactNode
}

export type MyPropsWithChildren<T> = T & { children: ReactNode }


/* alternative 1, reguläre properties */
export type CustomExpandableProps1 = {
    title: string
    fadeInDelayMs?: number
    wide?: boolean
    children: ReactNode
}

/* alternative 2, typen joinen mit UND Type-Operator */
export type CustomExpandableProps2 = {
    title: string
    fadeInDelayMs?: number
    wide?: boolean
} & ChildrenProps

/* alternative 3, Generics zum joinen von Typen */
export type CustomExpandableProps3 = MyPropsWithChildren<{
    title: string
    fadeInDelayMs?: number
    wide?: boolean
}>


export function CustomExpandable(props: CustomExpandableProps3) {

    const[fadeIn,setFadeIn] = useState(false)
    const[expanded,setExpanded] = useState(true)

    const fadeInDelayMs = props.fadeInDelayMs ?? 150

    useEffect(() => {
        setTimeout(() => {
            setFadeIn(true)
        }, fadeInDelayMs)
    }, [])

    const mainclasses = [ classes.expandable ]
    if (fadeIn) {
        mainclasses.push(classes.shown)
    }
    const bodyclasses = [ classes.body ]
    if (expanded) {
        bodyclasses.push(classes.expanded)
    }

    const onToggle = () => {
        setExpanded(!expanded)
    }

    return (
        <div className={mainclasses.join(" ")} style={{ width: props.wide ? "640px" : "480px" }}>
            <div className={classes.title}>{props.title}</div>
            <div className={bodyclasses.join(" ")}>{props.children}</div>
            <div className={classes.togglepanel}>
                <button onClick={onToggle}>Toggle State</button>
            </div>
        </div>
    )
}