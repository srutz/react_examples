import { NavLink } from "react-router-dom"
import { allroutes } from "../Router"
import classes from "./Menubar.module.css"

export function Menubar() {
    const routes = allroutes[0].children || []
    return (
        <div className={classes.menubar}>
            {routes.filter(route => route.path != "/").map(route => (
                <NavLink key={route.path} className={classes.menulink} to={route.path||"/"}>{route.path?.replace(/^./,"")}</NavLink>
            ))}
        </div>
    )
}