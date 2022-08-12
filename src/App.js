import React from 'react';
import './App.css';
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Features  from './components/Features/Features'
import FrequentlyAked  from './components/FrequentlyAked/FrequentlyAked'
import Footer  from './components/Footer/Footer'




function App() {
  return (
    <div className="app__body">
      <Header />
      <Hero />
      <Features />
      <FrequentlyAked />
      <Footer />
    </div>
  );
}

export default App;
