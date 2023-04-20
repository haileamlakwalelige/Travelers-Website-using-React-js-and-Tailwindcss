import React from 'react';
import './App.css';
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Activity from './components/Activity';
import Booking from './components/Booking';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
   <>
    <TopBar />
    <Navbar />
    <Hero />
    <Activity />
    <Booking />
    <Gallery />
    <Contact />
    <Footer />
   </>
  );
}

export default App;
