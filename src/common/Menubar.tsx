import { allroutes } from "../Router"
import classes from "./Menubar.module.css"

export function Menubar() {
    const routes = allroutes
    return (
        <div className={classes.menubar}>
            {routes.filter(route => route.path != "/").map(route => (
                <a key={route.path} className={classes.menulink} href={route.path||"/"}>{route.path?.replace(/^./,"")}</a>
            ))}
        </div>
    )
}