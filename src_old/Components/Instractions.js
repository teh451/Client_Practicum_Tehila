import { useContext } from "react"
import Form from "./Form"
import { personContext } from "./PersonContext"
import PersonContext from "./PersonContext"

export default function Instraction() {

    const perCtx = useContext(personContext)

    return (
        <div>
            {console.log( perCtx.person.firstName)}
            <p>שלום</p>
            <p>{perCtx.person.firstName} {perCtx.person.lastName}</p>
            <p>Instraction</p>
            <PersonContext><Form /></PersonContext>
        </div>
    )
}