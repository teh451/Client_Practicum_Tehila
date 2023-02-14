import { createContext, useState } from "react"
// import Form from "./Form";
// import FormChild from "./FormChild";
// import Instraction from "./Instractions";

export const personContext = createContext();

// export const productContext=createContext();

export default function PersonContext(props) {

    const [person, setPerson] = useState({ FirstName: '', LastName: '', Tz: '', Status: 0, Hmo: 0 })
     const [arrChild, setArrChild] = useState([])
     const [countChild,setCountChild]=useState()

    return (
        <personContext.Provider value={{ person: person, setPerson: setPerson, arrChild: arrChild, setArrChild: setArrChild,
        countChild:countChild,setCountChild:setCountChild}} >
            {props.children}
        </personContext.Provider>
    )
}