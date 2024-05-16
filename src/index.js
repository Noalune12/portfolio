import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './style.scss';
import Header from './components/Header';
import Home from './pages/Home'
// import Error404 from './pages/Error404';
import Projet from './pages/Projet';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <Router >
        <Header />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path="/projets/:projetId" element={<Projet />} />
          {/* <Route path="*" element={<Error404 />} /> */}
        </Routes>
    </Router>
  </React.StrictMode>
);

