import { CSSProperties, useState } from "react"

export function NativeEvents() {

    const[message,setMessage] = useState("Hover mouse")

    const style: CSSProperties = {
        width: "80vw",
        height: "120px",
        backgroundColor: "orange",
        fontSize: "3rem",
        fontWeight: "700",
        letterSpacing: "-4px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        userSelect: "none",
        cursor: "pointer", 
    }

    const onMouseMouse = (e: React.MouseEvent<HTMLDivElement,MouseEvent>) => {
        console.log("mousemove: " + e.nativeEvent.x + ", " + e.nativeEvent.y)
        setMessage(`${e.nativeEvent.offsetX} x ${e.nativeEvent.offsetY}`)
    }

    return (
        <div style={style} onMouseMove={onMouseMouse}>
            {message}
        </div>
    )

}