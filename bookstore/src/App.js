import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import AddBooks from './Components/AddBooks';
import Books from './Components/Books';
import About from './Components/About';
import React from 'react';

function App() {
  return (
   
<React.Fragment>

<Header/>

<Routes>

<Route path="/" element={<Home/>} exact/>
<Route path="/addBook" element={<AddBooks/>} exact/>
<Route path="/getbook" element={<Books/>} exact/>
<Route path="/about" element={<About/>} exact/>


</Routes>






</React.Fragment>



    

  );
}

export default App;
