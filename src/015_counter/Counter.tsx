import { useState } from "react"

export function Counter() {

    const[counter,setCounter] = useState(1)

    const onClick = (e: React.MouseEvent<HTMLButtonElement,MouseEvent>) => {
        setCounter(counter + 1)
    }

    return (
        <div className="column-container">
            {counter}
            <button onClick={onClick}>Increase counter</button>
        </div>
    )
}