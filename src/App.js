import React from 'react';
import './App.css';
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Features  from './components/Features/Features'
import FrequentlyAked  from './components/FrequentlyAked/FrequentlyAked'
import Footer  from './components/Footer/Footer'
import { CssBaseline } from '@mui/material';
import Cards from './components/CardItem/CardItem'
import Extension from './components/Extension/Extension'




function App() {
  return (
		<div className="app">
			<CssBaseline />
			<div className="app__body">
				<Header />
				<Hero />
				<Features />
				<Extension />
				<FrequentlyAked />
			</div>
			<Footer />
		</div>
	);
}

export default App;
