import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import './reset.css';
import Details from './pages/Details';
import Home from './pages/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<<<<<<< HEAD

=======
>>>>>>> 7e93523b2767602c3335756c83aa1a04a39fac5e
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/details/:id' element={<Details />}/>
    </Routes>
  </BrowserRouter>
<<<<<<< HEAD
  
=======
>>>>>>> 7e93523b2767602c3335756c83aa1a04a39fac5e
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
