

import { BrowserRouter } from 'react-router-dom';
import './App.css';
import PersonContext from "./Components/PersonContext";
// import Form from './Components/Form';
// import Home from './Components/Home';
// import Instraction from './Components/Instractions';
// import PersonContext from './Components/PersonContext';
import Router from "./Components/Router";
//import Home from './Components/Home';

function App() {
  return (
    <div>
      <BrowserRouter>
        <PersonContext>
          <Router />
        </PersonContext>
      </BrowserRouter>
    </div>
  );
}

export default App;
