import { Routes, Route } from 'react-router-dom'
import Form from './Form'
import Home from './Home'
import Instraction from './Instractions'


export default function Router() {
    return (
        <div>

            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/Form" element={<Form/>}></Route>
                <Route path="/Instraction" element={<Instraction/>}></Route>
            </Routes>
        </div>
    )
}