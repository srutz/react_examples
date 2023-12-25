import { CSSProperties } from "react"


export type StyledBannerProps = {
    text: string
    size?: number
}

export function StyledBanner(props: StyledBannerProps) {

    const style: CSSProperties = {
    }
    if (props.size) {
        style.fontSize = props.size + "px"
    } else {
        style.fontSize = "16px"
    }

    return (
        <h1 style={ style }>{props.text}</h1>
    )
}