import { render } from '@testing-library/react';
import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import App from '../App';


function segundaPagina()  {
    
    return (
    <div>
        <h1>Hola mi Nombre completo es Pedro Rodriguez Casas {"\n"}</h1>
        <h1>Mi actual nivel de ingles es: Intermedio Avanzado {"\n"}</h1>
        <h1>Las tecnologias que manejo actualmento son: {"\n"}</h1>
        <h3>UFT, SQL, Teradata, Postman, AML, Jira, Linux,  </h3>

        <Router>
        <Link to = "/home">Inicio</Link>
        <Switch>
        <Route exact path = "/home" component={App}/>
        </Switch>
        
        </Router>    
    </div>
    );
    
}

export default segundaPagina;