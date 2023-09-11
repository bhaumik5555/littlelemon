import './App.css';

import {Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header'
import Navigation from './Components/Nav/Nav'
import Footer from './Components/Footer/Footer'
import Home from './Components/Main/Main'
import About from './Components/Intro/Intro'
import Menu from './Components/Menu/Menu'
import Contact from './Components/Contact/Contact'
import Reservation from './Components/Reservation/Reservation'

function App() {
  return (
    <div className="App">
        <Header/>
        <Navigation />
        <Routes> 
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/menu" element={<Menu />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/reservation" element={<Reservation />}></Route>
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
