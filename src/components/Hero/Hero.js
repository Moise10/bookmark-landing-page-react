import React from 'react'
import Button from '@mui/material/Button';
import './Hero.css'
import Bookmark from '../../images/illustration-hero.svg'
import './Hero.css'
import  Dots from '../../images/bg-dots.svg'

function Hero() {
  return (
		<div className="hero__container">
			<div className="hero__right">
				<img src={Bookmark} alt="" />
			</div>

			<div className="hero__left">
				<h1 className="hero__title">A Simple Bookmark Manager</h1>
				<p className="hero__text">
					A clean and simple interface to organize your favorite websites.Open a
					new browser tab and see your sites load instantly. Try it fro free
				</p>
				<div className="btn__flex">
					<Button className="btn btn__chrome" variant="contained">
						Get it on Chrome
					</Button>
					<Button 
					size="medium"
					className="btn btn__firefox" >
						Get it on Firefox
					</Button>
				</div>
			</div>
		</div>
	);
}

export default Hero