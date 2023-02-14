import { useContext } from "react"
import { personContext } from "./PersonContext"
import { useNavigate } from "react-router-dom"

export default function Instraction() {

    const perCtx = useContext(personContext)
    const navigatePerson = useNavigate();

    return (
        <div>
            <p>שלום</p>
            <p>{perCtx.person.FirstName} {perCtx.person.LastName}</p>
            <p>Instraction</p>
            <button onClick={() => navigatePerson('/')}>Home</button>
        </div>
    )
}