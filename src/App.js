import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import './reset.css';
import Details from './pages/Details';
import Home from './pages/Home';

class App extends Component{

  render(){
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/details/:id' element={<Details />}/>
    </Routes>
  </BrowserRouter>
  }
}
export default App;
