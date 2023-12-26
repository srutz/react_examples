import { useState } from "react"
import { makeLongText } from "../common/util"
import { ModalPanel } from "./ModalPanel"

export function ModalTest() {

    const[visible,setVisible] = useState(false)

    const onShow = () => {
        setVisible(true)
    }
    const onClose = () => {
        setVisible(false)
    }
    return (
        <div className="column-container">
            <ModalPanel title="Bestätigung" visible={visible} onClose={onClose}>
                {makeLongText(20)}
            </ModalPanel>
            <button onClick={onShow}>Anzeigen </button>
        </div>

    )
}