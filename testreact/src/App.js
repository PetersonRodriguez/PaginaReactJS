import React from 'react';
import logo from './assets/images/logo.svg';
import './assets/css/App.css';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import segundaPagina from './componentes/segundaPagina';
import { render } from '@testing-library/react';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
           Bienvenido a mi primer pagina en Reactjs.
          <h1>{"\n"}</h1>

          <Router>
        <ul className = "nav-container s-border s-main-center s-pl-0">  

          <li className="nav-container--item s-mr-2">
          <Link to = "/home">Inicio</Link>{' '}

          
          <Link to = "/segundaPagina">About me</Link></li>
         </ul> 
          <Switch>
          <Route exact path = "/SegundaPagina" component={segundaPagina}/>
          </Switch>

        </Router>

        </p>
      </header>
    </div>
  );
}
export default App;
