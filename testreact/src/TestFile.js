import React from 'react'
import {scree, render} from '@testing-library/react'
import {App} from './App'

describe("App", ()=>{
    it("title is displayed", ()=>{
        render(<App/>)
        expect(screen.queryByText(/Bienvenido/i)).toBeInTheDocument();

    });
});