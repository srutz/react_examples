/* (c)  SBN Data Technologies GmbH. All rights reserved */

import { CSSProperties, ReactNode, useEffect, useLayoutEffect, useRef } from "react"
import { randomId } from "./util"

export type Point = {
    x: number
    y: number
}

export type Size = {
    width: number
    height: number
}

export type AnimatedDivProps = {
    position?: Point
    size?: Size
    fromPosition?: Point
    opacity?: number
    durationMs?: number
    delayMs?: number
    relative?: boolean
    transitionProperty?: string // defaults to all
    children?: ReactNode
}

export function AnimatedDiv(props: AnimatedDivProps) {
    const { 
        position, 
        size,
        fromPosition,
        opacity,
        durationMs = 250,
        delayMs = 0,
        relative,
        transitionProperty = "all", 
        children 
    } = props

    const id = "id" + randomId()
    useLayoutEffect(() => {
        const element = document.querySelector("#" + id) as HTMLDivElement
        if (element && fromPosition) {
            element.style.left = fromPosition.x + "px"
            element.style.top = fromPosition.y + "px"
        }        
    })

    const styles: CSSProperties = {
        transitionProperty: transitionProperty,
        transitionDuration: durationMs + "ms",
        transitionDelay: delayMs + "ms",
        transitionTimingFunction: "ease-in-out",
        position: relative ? "relative" : "absolute", 
        opacity: opacity !== undefined ? opacity : "1",
        left: position ? position.x + "px" : "auto", 
        top: position ? position.y + "px" : "auto", 
        width: size ? size.width + "px" : "auto",
        height: size ? size.height + "px" : "auto",
    }
    return (
        <div id={id} style={styles}>{children}</div>
    )
}