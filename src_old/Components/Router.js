import {  Routes, Route ,Link } from 'react-router-dom'
import Form from './Form'
import FormChild from './FormChild'
import Home from './Home'
import PersonContext from './PersonContext'


export default function Router() {
    return (
        <div>

            {/* <Router>
                <Link to='/Form'> Form </Link>
                <Link to='/Instraction'> Instractions </Link>
            </Router> */}
            <Routes>
                <Route path="/" element={<PersonContext><Home/></PersonContext>}></Route>
                <Route path="/Form" element={<PersonContext><Form/></PersonContext>}></Route>
                <Route path="/fromChild" element={<PersonContext><FormChild/></PersonContext>}></Route>
                <Route path="/Instraction" element={<PersonContext><Instraction/></PersonContext>}></Route> 
            </Routes>
        </div>
    )
}