import React from 'react'
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Chrome from '../../images/logo-chrome.svg';
import Button from '@mui/material/Button';
import { red } from '@mui/material/colors';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import Firefox from '../../images/logo-firefox.svg'
import Opera from '../../images/logo-opera.svg'
import './CardItem.css'

function CardItem({item}) {
	const {src, title, text, addButton} = item;
	
  return (
		<div className="card">
			<Card className="main__card">
				<CardContent
					style={{
						display: 'flex',
						justifyContent: 'center',
						flexDirection: 'column',
						alignItems: 'center',
						marginTop: '2rem'
					}}>
					<CardMedia
						component="img"
						image={src}
						style={{ width: '30%', height: '30%' }}
					/>
					<Typography style={{ textAlign: 'center' }}>
						<h1 style={{ textAlign: 'center', fontSize: '1.2rem', marginTop:'1rem' }}>{title}</h1>
						<p style={{ textAlign: 'center', fontSize: '.8rem'}}>{text}</p>
					</Typography>
					<Button variant="contained" style={{borderRadius: '5px'}}
					className="btn">{addButton}</Button>
				</CardContent>
			</Card>
		</div>
	);
}

export default CardItem