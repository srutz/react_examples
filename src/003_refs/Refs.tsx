import { useRef } from "react"

type ME = React.MouseEvent<HTMLElement,MouseEvent>


export function Refs() {

    const mainRef = useRef(null)
    const headerRef = useRef<HTMLHeadingElement>(null)

    function onClick(e: ME) {
        if (headerRef.current) {
            const header = headerRef.current
            if (header.textContent?.indexOf("Hello") != -1) {
                header.textContent = 'Goodbye';
            } else {
                header.textContent = 'Hello Hello';
            }
        }
    }
    return (
        <div ref={mainRef}>
            <h3 ref={headerRef}>Hello Hello</h3>
            <button onClick={onClick}>Click me</button>
        </div>
    )
}