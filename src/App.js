import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarReact from './componentes/navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Textdisplay from './pages/Textdisplay';
import Imgdisplay from './pages/Imgdisplay';
import RegisterForm from './pages/registerForm';

function App() {
  return (
     <BrowserRouter>
     <NavbarReact />
     <Routes>
           <Route path='/landingpagereact/' element={<HomePage />}></Route>
           <Route path='/landingpagereact/textdisplay' element={<Textdisplay />}></Route>
           <Route path='/landingpagereact/imgdisplay' element={<Imgdisplay />}></Route>
           <Route path='/landingpagereact/register' element={<RegisterForm />}></Route>
     </Routes>

     </BrowserRouter>
  );
}

export default App;
