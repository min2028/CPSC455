import NavBar from './components/navbar/NavBar';
import Home from './pages/home';
import About from "./pages/about/About";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from "react";

function App() {
  return (
    <Router>
        <NavBar />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
        </Routes>
    </Router>
  );
}

export default App;
