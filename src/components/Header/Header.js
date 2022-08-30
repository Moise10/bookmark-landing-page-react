import React, {useState} from 'react'
import './Header.css'
import Logo from '../../images/logo-bookmark.svg'
import './Header.css'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import styled from 'styled-components'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import useMediaQuery from '@mui/material/useMediaQuery';
import json2mq from 'json2mq';


function Header() {
const [isOpen , setIsOpen] = useState(false)
const [cliked, setIsClicked] = useState(true);
const [state, setState] = React.useState({
	right: false,
});

const matches = useMediaQuery(
	json2mq({
		minWidth: 600,
	})
);

const toggleDrawer = (anchor, open) => (event) => {
	if (
		event.type === 'keydown' &&
		(event.key === 'Tab' || event.key === 'Shift')
	) {
		return;
	}

	setState({ ...state, [anchor]: open });
};


const list = (anchor) => (
	<Box
		role="presentation"
		onClick={toggleDrawer(anchor, false)}
		onKeyDown={toggleDrawer(anchor, false)}
		style={{
			width: '100vw',
			padding: '1rem',
			minHeight: '100vh',
			backgroundColor: '#242A45',
		}}>
		<FlexBox>
			<img src={Logo} alt="" style={{ objectFit: 'contain' }} />
			<Button onClick={toggleDrawer(anchor, true)}>
				<CloseIcon />
			</Button>
		</FlexBox>

		<ListStyles>
			<ListItemStyle>
				<a href="#">Features</a>
			</ListItemStyle>
			<ListItemStyle>
				<a href="#">Pricing</a>
			</ListItemStyle>
			<ListItemStyle>
				<a href="#">Contact</a>
			</ListItemStyle>
			<ListItemStyle>
				<a href="#">Login</a>
			</ListItemStyle>

			<IconsStyles>
				<FacebookIcon />
				<TwitterIcon />
			</IconsStyles>
		</ListStyles>
	</Box>
);
  
  return (
		<>
			<HeaderStyles>
				{['right'].map((anchor) => (
					<React.Fragment key={anchor}>
						<Flex>
							<img src={Logo} alt="" style={{ objectFit: 'contain' }} />
							<Button onClick={toggleDrawer(anchor, true)}>
								<MenuIcon />
							</Button>
						</Flex>

						<Drawer
							anchor={anchor}
							open={state[anchor]}
							onClose={toggleDrawer(anchor, false)}
						>
							{list(anchor)}
						</Drawer>
					</React.Fragment>
				))}
			</HeaderStyles>

			<HeaderBig>
				<img src={Logo} alt="" className="logo" />
				<nav>
					<ul>
						<li>
							<a href="#">Features</a>
						</li>
						<li>
							<a href="#">Pricing</a>
						</li>
						<li>
							<a href="#">Contact</a>
						</li>
						<li>
							<a href="#" className="login">
								Login
							</a>
						</li>
					</ul>
				</nav>
			</HeaderBig>
		</>
	);
}

const Flex = styled.div`
	display: flex;
	justify-content: space-between;

	.css-i4bv87-MuiSvgIcon-root {
		color: #fff;
		font-size: 2rem;
	}
`;

const FlexBox = styled.div`
	min-height: 4rem;
	padding: 2rem 1rem;
	display: flex;
	justify-content: space-between;
`;

const HeaderStyles = styled.div`
	min-height: 4rem;
	text-align: center;
	margin-bottom: 3rem;
	padding: 2rem 1rem;

	.css-i4bv87-MuiSvgIcon-root {
		color: #2a2a2a;
	}

	@media screen and (min-width: 768px) {
		display: none;
	}
`;

const ListStyles = styled.ul`
  display: flex;
	color: yellow;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	margin-top: 2rem;
	list-style: none;

`;

const ListItemStyle = styled.li`
	width: 90vw;
	text-align: center;
	padding: 1rem 0;
	margin-bottom: 1.5rem;
	&:hover {
		border: 1px solid white;
	}

	a {
		text-decoration: none;
		font-size: 1.3rem;
		color: white;
		text-transform: uppercase;
		letter-spacing: 4px;
		font-weight: 300;
	}
`;

const IconsStyles = styled.div`
  display: flex;
	justify-content: center;
	gap: 2rem;
	margin-top: auto;
`


const HeaderBig = styled.div`
	@media screen and (max-width: 768px) {
		display: none;
	}

	@media (min-width: 768px) {
		min-height: 4rem;
		padding: 2rem 0;
		display: flex;
		justify-content: space-between;
		align-items: center;

		.logo {
			object-fit: contain;
		}

		ul {
			display: flex;
			gap: 1.5rem;
			justify-content: center;
			align-items: center;

			li {
				list-style: none;

				.login {
					background-color: #fa5959;
					color: white;
					padding: 0.5rem 1rem;
					border-radius: 5px;
					font-size: 0.6rem;
					

					&:hover {
						border: 1.5px solid #fa5959;
						background-color: #fff;
					}
				}

				a {
					text-decoration: none;
					text-transform: uppercase;
					font-size: 0.7rem;
					font-weight: 400;
					color: #000;
					cursor: pointer;

					&:hover {
						color: #fa5959;
					}
				}
			}
		}
	}
`;




export default Header