import { createContext, useState } from "react"

export const personContext = createContext();

// export const productContext=createContext();

export default function PersonContext(props) {

    const [person, setPerson] = useState({ firstName: '', lastName: '', tz: '', gender: null, HMO: null })
    const [arrChild, setArrChild] = useState([])

    return (
        <personContext.Provider value={{person,setPerson,arrChild,setArrChild } }>
            {props.children}
        </personContext.Provider>
    )
}