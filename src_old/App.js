import react from "react"

import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Form from './Components/Form';
import Home from './Components/Home';
import Instraction from './Components/Instractions';
import PersonContext from './Components/PersonContext';
import Router from "./Components/Router";
//import Home from './Components/Home';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Router/>
      </BrowserRouter>
    </div>
  );
}

//   return (
//     // <div>
//     // //<Home />
//     // // <PersonContext>
//     //     {/* <Form />   */}
//     // //   <Instraction />
//     // // </PersonContext>
//     //   <Router>
//     //     <BrowserRouter>
//     //     </div>
//        )
// }

export default App;
