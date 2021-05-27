import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import App from '../App';


function segundaPagina()  {
    
    return (
    <div>
        <h1>Hola mi Nombre completo es Pedro Rodriguez Casas {"\n"}</h1>
        <h1>Mi nivel actual de ingles es: Intermedio Avanzado {"\n"}</h1>
        <h1>Las tecnologias que manejo actualmento son: {"\n"}</h1>
        <h3>UFT, SQL, Teradata, Postman, Rest Client, AML, Jira, Linux, FTP, VBS, VBA, Excel y un poco de P ower BI  </h3>   
    </div>
    );
    
}

export default segundaPagina;