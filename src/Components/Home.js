import { useNavigate } from 'react-router-dom'
// import { BrowserRouter } from 'react-router-dom'
// import { Link } from 'react-router-dom'
// import {react} from 'react';

export default function Home() {
    const navigatePerson = useNavigate();
    return (
        <>
            <button onClick={() => navigatePerson('/Form')}>Form</button>
            <button onClick={() => navigatePerson('/Instraction')}>Instraction</button>
            {/* <BrowserRouter>
                <Link to='/Form'> Form </Link>
                <Link to='/Instraction'> Instractions </Link>
            </BrowserRouter> */}
        </>
    )
}