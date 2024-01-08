
import { Suspense, lazy, useEffect, useState } from "react"
import classes from "./FetchDataSuspense.module.css"

const FetchDataLazyWorker = lazy(() => import("./FetchDataLazyWorker"));

export function FetchDataSuspense() {
    const [triggerValue, setTriggerValue] = useState(0)
    const onReload = () => {
        setTriggerValue(t => t + 1)
    }

    return (
        <div className={classes.panel}>
            <div className={classes.heading}>Produkte</div>
            <Suspense fallback={<h1>... loading data</h1>}>
                <FetchDataLazyWorker keys={[ triggerValue ]}></FetchDataLazyWorker>
            </Suspense>
            <div className={classes.reload} onClick={onReload}>↻</div>
        </div>
    )
}

