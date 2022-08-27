import React, {useState} from 'react'
import './Header.css'
import Logo from '../../images/logo-bookmark.svg'
import './Header.css'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import styled from 'styled-components'


function Header() {
const [isOpen , setIsOpen] = useState(false)
const [cliked, setIsClicked] = useState(true);

  return (
		<HeaderStyle>
			<div>
				<img src={Logo} alt="" />
				<div onClick={() => setIsClicked((prev) => !prev)}>
					{cliked ? (
						<MenuIcon style={{ color: '#fff' }} />
					) : (
						<CloseIcon style={{ color: '#fff' }} />
					)}
				</div>
			</div>
			{cliked && (
				<NavStyle>
					<NavList>
						<li>
							<a href="#">Feature</a>
						</li>
						<li>
							<a href="#">Home</a>
						</li>
						<li>
							<a href="#">Contact</a>
						</li>
					</NavList>
				</NavStyle>
			)}
		</HeaderStyle>
	);
}

const HeaderStyle = styled.header`
	background-color: #242a45;
	min-width: 100%;
	img {
		object-fit: contain;
	}

	div {
		display: flex;
		justify-content: space-between;
		min-height: 50px;
		align-items: center;
		padding: 1rem;
	}
`;

const NavStyle = styled.nav`
	

`;

const NavList = styled.ul`
	position: fixed;
	width: 100%;
	height: 100vh;
	background-color: #242a45;
	z-index: 1;
	padding: 1.2rem;
	list-style: none;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;

	li {
		width: 100%;
		text-align: center;
		padding: 10px 0;
		margin: 1.2rem 1rem;
		border: 3px solid #fff;
	}

	a {
		background-color: red;
		text-decoration: none;
	}
`;


export default Header