
import { ChangeEvent, FormEvent, useState } from "react"
import classes from "./SimpleForm.module.css"

export type FormContent = {
    firstName: string
    lastName: string
    email: string
    password1: string
    password2: string
}

export function SimpleForm() {

    const[content,setContent] = useState<FormContent>({
        firstName: "",
        lastName: "",
        email: "",
        password1: "",
        password2: "",
    })
    const[message,setMessage] = useState("")

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const name = e.target.name
        const value = e.target.value
        const newContent = {
            ...content,
            [name]: value,
        }
        setContent(newContent)
        let newMessage = ""
        //console.table(newContent)
        if ((newContent.password1 != newContent.password2)) {
            newMessage = "Passwörter stimmen nicht überein"
        }
        setMessage(newMessage)
    }

    const onSubmit = (e: FormEvent) => {
        e.preventDefault()
        console.log("submit")
        console.table(content)
    }

    const valid = !message && content.email && !!content.password1

    return (
        <form className={classes.formcontainer} onSubmit={onSubmit}>
            <h3>Registrierung</h3>
            <div className={classes.message}>{message}</div>

            <div className={classes.formlabel}>Vorname</div>
            <input name="firstName" onChange={onChange} className={classes.input} placeholder="Vorname"></input>
            <div className={classes.formlabel}>Nachname</div>
            <input name="lastName" onChange={onChange} className={classes.input} placeholder="Nachname"></input>
            <div className={classes.formlabel}>EMail</div>
            <input name="email" onChange={onChange} className={classes.input} placeholder="E-Mail"></input>
            <div className={classes.formlabel}>Passwort</div>
            <input name="password1" onChange={onChange} className={classes.input} type="password" placeholder="Passwort"></input>
            <div className={classes.formlabel}>Passwort (Wiederholung)</div>
            <input name="password2" onChange={onChange} className={classes.input} type="password" placeholder="Passwort (Wiederholung)"></input>
            <button className={classes.submit} disabled={!valid}>Abschicken</button>

        </form>
    )
}