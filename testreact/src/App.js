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
          Hola bienvenido a la primer pagina en Reactjs de Pedro Rodriguez.
          <h1>{"\n"}</h1>
        </p>

        <Router>
          <Link to = "/segundaPagina">Segunda Pagina</Link>
          <Switch>
          <Route exact path = "/SegundaPagina" component={segundaPagina}/>
          </Switch>

        </Router>

      </header>


    </div>
  );
}
export default App;
