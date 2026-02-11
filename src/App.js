import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarReact from './componentes/navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Textdisplay from './pages/Textdisplay';

function App() {
  return (
     <BrowserRouter>
     <NavbarReact />
     <Routes>
           <Route path='/' element={<HomePage />}></Route>
           <Route path='/textdisplay' element={<Textdisplay />}></Route>
     </Routes>

     </BrowserRouter>
  );
}

export default App;
