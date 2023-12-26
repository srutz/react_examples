
import { ReactNode } from "react"
import classes from "./ModalPanel.module.css"


export type ModalPanelProps = {
    visible: boolean
    title: string
    children: ReactNode
    onClose: () => void
}

export function ModalPanel(props: ModalPanelProps) {
    if (!props.visible) {
        return null
    }


    return (
        <div className={classes.modaloverlay}>
            <div className={classes.modalpanel}>
                <div className={classes.modaltitle}>
                    {props.title}
                </div>
                <div className={classes.modalcontent}>
                    {props.children}
                </div>
                <div className={classes.modalfooter}>
                    <button onClick={props.onClose}>Schließen</button>
                </div>
            </div>
        </div>
    )
}