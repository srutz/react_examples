import { useEffect } from "react"

export function ChangeDom() {

    useEffect(() => {
        const element = document.querySelector("#myheader") as HTMLElement
        element.style.opacity = "1"
    }, [])

    return (
        <h1 id="myheader" style={{ opacity: 0, transition: "all 5s"}}>
            Change the dom
        </h1>
    )

}