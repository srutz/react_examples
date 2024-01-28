import { CSSProperties } from "react"
import { ForceUpdate } from "../common/ForceUpdate"

type ME = React.MouseEvent<HTMLElement,MouseEvent>

let counter = 1

export function Button() {

    const forceUpdate = ForceUpdate()

    function onClick(e: ME) {
        counter++
        forceUpdate()
    }
    const style: CSSProperties = {
        backgroundColor: 'lightGray',
        userSelect: 'none',
        cursor: 'pointer',
    };
    return (
        <div>
            <p>{counter}</p>
            <p>The time is: {new Date().toISOString()}</p>
            <div style={style} onClick={onClick}>Click me</div>
        </div>
    )
}
