import { useState } from "react"

export function ForceUpdate() {
    const [state, forceUpdate] = useState(false)
    return () => { forceUpdate(!state) }
}
