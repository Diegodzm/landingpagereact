import './App.css';
import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarReact from './componentes/navbar';
import { HashRouter, Route, Routes, useNavigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Textdisplay from './pages/Textdisplay';
import Imgdisplay from './pages/Imgdisplay';
import RegisterForm from './pages/registerForm';

function AppRoutes() {
  const navigate = useNavigate();

  useEffect(() => {
    // Handle redirect from 404.html
    const params = new URLSearchParams(window.location.search);
    const pathFromQuery = params.get('/');
    
    if (pathFromQuery) {
      const decodedPath = decodeURIComponent(pathFromQuery)
        .replace(/~and~/g, '&')
        .replace(/\/$/, '');
      
      // Clear the query params and navigate to the correct path
      window.history.replaceState(null, null, window.location.pathname + '#' + decodedPath);
      navigate(decodedPath === '' ? '/' : decodedPath);
    }
  }, [navigate]);

  return (
    <>
      <NavbarReact />
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/textdisplay' element={<Textdisplay />}></Route>
        <Route path='/imgdisplay' element={<Imgdisplay />}></Route>
        <Route path='/register' element={<RegisterForm />}></Route>
      </Routes>
    </>
  );
}

function App() {
  return (
    <HashRouter>
      <AppRoutes />
    </HashRouter>
  );
}

export default App;
