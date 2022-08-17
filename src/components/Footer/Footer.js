import { Button } from '@mui/material'
import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { useForm } from "react-hook-form";
import Logo from '../../images/logo-bookmark.svg'
import './Footer.css'

function Footer() {
  const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();
  return (
		<div className="footer__container">
			<div className="footer">
				<div className="footer__top__container">
					<div className="footer__top">
						<p className="footer__header">35,000+ Already Joined</p>
						<h2 className="footer_secondary">
							Stay up-to-date with what we're doing
						</h2>
						<form action="">
							<input type="email" placeholder="Enter your Email address" />
							<Button className="footer__btn" variant="contained">
								Contact Us
							</Button>
						</form>
					</div>
				</div>
				<div className="footer__nav__container">
					<div className="footer__nav">
						<div className="footer__nav-tags">
							<img src={Logo} className="footer__logo" alt="" />
							<nav className="nav">
								<ul className="nav__lists">
									<li className="nav__link">
										<a href="#">Features</a>
									</li>
									<li className="nav__link">
										<a href="#">Pricing</a>
									</li>
									<li className="nav__link">
										<a href="#">Contact</a>
									</li>
								</ul>
							</nav>
						</div>
						<div className="footer__icons">
							<FacebookIcon />
							<TwitterIcon />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Footer