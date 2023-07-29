import React from "react";
import VendingMachine from "./Vendingmachine";
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Routes from "./Routes";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <VendingMachine />
      < Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
