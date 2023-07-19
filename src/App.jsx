import './App.css' 
import 'animate.css';
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";
import Home from './screens/Home';

const App = () => (

  <Routes>
    <Route path="/" element={<Home />} />
  </Routes>
)

export default App
