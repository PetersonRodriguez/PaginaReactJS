import { render, screen } from '@testing-library/react';
import App from './App';
import segundaPagina from './componentes/segundaPagina';
import Contacto from './componentes/Contacto';

/*test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});*/

describe("App", ()=>{
  it("title is displayed", ()=>{
      render(<App/>)
      expect(screen.queryByText(/Bienvenido/i)).toBeInTheDocument();

  });
});

describe("segundaPagina", ()=>{
  it("name is displayed on screen", ()=>{
      render(<segundaPagina/>)
      expect(screen.queryByText(/Pedro/i)).toBeInTheDocument();

  });
});

beforeEach(()=> render(<Contacto/>));

describe("Contacto", ()=>{
  it("Page name is displayed", ()=>{
      //render(<Contacto/>)
      expect(screen.queryByText(/formulario/i)).toBeInTheDocument();

  });
  it("Input nombre is displayed",() =>{
    //render(<Contacto/>)
    expect(screen.queryByPlaceholderText(/Nombre/i)).toBeInTheDocument();
  })

  it("send button is displayed",() =>{
    //render(<Contacto/>)
    expect(screen.queryByText(/enviar/i)).toBeInTheDocument();
  })

});