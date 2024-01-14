import { ComponentProps, ReactNode, useEffect, useState } from "react"
import classes from "./StyledExpandable.module.css"





/* alternative 1, reguläre properties */
export type StyledExpandableProps = {
    title: string
    fadeInDelayMs?: number
    wide?: boolean
    className?: string
    children: ReactNode
} & ComponentProps<'div'>


function mergeClasses(...classes: string[]) {
    return classes.filter(Boolean).join(" ")
}



export function StyledExpandable(props: StyledExpandableProps) {

    const { title, children, fadeInDelayMs = 150, wide, className, ...rest } = props

    const[fadeIn,setFadeIn] = useState(false)
    const[expanded,setExpanded] = useState(true)

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
    if (className) {
        mainclasses.push(className)
    }

    const onToggle = () => {
        setExpanded(!expanded)
    }

    return (
        <div className={mainclasses.join(" ")} style={{ width: props.wide ? "640px" : "480px" }} {...rest}>
            <div className={classes.title}>{props.title}</div>
            <div className={bodyclasses.join(" ")}>{props.children}</div>
            <div className={classes.togglepanel}>
                <button onClick={onToggle}>Toggle State</button>
            </div>
        </div>
    )
}