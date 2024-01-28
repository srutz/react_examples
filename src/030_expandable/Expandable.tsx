import { useEffect, useState } from "react"
import classes from "./Expandable.module.css"

function eliminateDoubles(a: string[]) {
    const result: string[] = []
    for (const s of a) {
        if (!result.includes(s)) {
            result.push(s)
        }
    }
    return result
}
    


export type ExpandableProps = {
    title: string
    body: string
    fadeInDelayMs?: number
    wide?: boolean
}

export function Expandable(props: ExpandableProps) {

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
            <div className={bodyclasses.join(" ")}>{props.body}</div>
            <div className={classes.togglepanel}>
                <button onClick={onToggle}>Toggle State</button>
            </div>
        </div>
    )
}