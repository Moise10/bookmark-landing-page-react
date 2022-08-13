import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Button } from '@mui/material';
import Question from './Question';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import './FrequentlyAked.css';


export default function SimpleAccordion() {

	const Questions = [
		{"title": "What is Bookmark", 
		"text": "Organize your bookmarks however you like. our simple drag-and-drop interface gives you complete control over how you manage your favorite sites"},
		{"title": "How can i request a new browser", 
		"text": "Our powerfull search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks."},
		{"title": "Is there a mobile app", 
		"text": "Our powerfull search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks."},
		{"title": "What about other Chromium browsers?", 
		"text": "Our powerfull search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks."},
	]


	return (
		<div className="fqa">
			<h1 className="heading__faq">Frequently Asked Questions</h1>
			<p className="text">
				Here are some of our FAQs.If you have any other questions you'd like
				answered please feel free to email us
			</p>
			{Questions.map((question) => (
				<Question
					key={question.text}
					text={question.text}
					title={question.title}
					ExpandMore={<ExpandMoreIcon />}
					ExpandLess={<ExpandLessIcon />}
				/>
			))}
			<div className="btn__fqa">
				<button className="">More Info</button>
			</div>
		</div>
	);
}
