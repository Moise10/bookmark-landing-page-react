import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Chrome from '../../images/logo-chrome.svg';
import Button from '@mui/material/Button';
import { red } from '@mui/material/colors';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import CardItem from '../CardItem/CardItem'
import Firefox from '../../images/logo-firefox.svg';
import Opera from '../../images/logo-opera.svg';
import './Extension.css'


function Extension() {
  const items = [
		{
			src: `${Chrome}`,
			title: 'Add to Chrome',
			text: 'Minimum version 62',
			addButton: 'Add & Install Extension',
		},
		{
			src: `${Firefox}`,
			title: 'Add to Firefox',
			text: 'Minumum version 55',
			addButton: 'Add & Install Extension',
		},
		{
			src: `${Opera}`,
			title: 'Add to Firefox',
			text: 'Minumum version 55',
			addButton: 'Add & Install Extension',
		},
	];

  
	
	return (
		<div>
			<div className="card__header">
				<h1 className="card_title">Download the extension</h1>
				<p className="text text-width">
					We've got more browsers in the pipeline. Please do le us know if
					you've got a favourite you'd like us to prioritize
				</p>
			</div>
			<div className="extension">
				{items.map((item) => (
					<CardItem key={item} item={item} />
				))}
			</div>
		</div>
	);
}

export default Extension;
