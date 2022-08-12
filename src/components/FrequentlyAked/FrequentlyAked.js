import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Button } from '@mui/material';

export default function SimpleAccordion() {
	return (
		<div>
      <h1 className="heading__faq">Frequently Asked Questions</h1>
      <p className="text">Here are some of our FAQs.If you have any other questions you'd like answered please feel free to email us</p>
			<Accordion>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel1a-content"
					id="panel1a-header"
				>
					<Typography>What is Bookmark</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						Organize your bookmarks however you like. our simple drag-and-drop
						interface gives you complete control over how you manage your
						favorite sites
					</Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel2a-content"
					id="panel2a-header"
				>
					<Typography>How can i request a new browser</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						Our powerfull search feature will help you find saved sites in no
						time at all. No need to trawl through all of your bookmarks.
					</Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel2a-content"
					id="panel2a-header"
				>
					<Typography>Is there a mobile app</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						Our powerfull search feature will help you find saved sites in no
						time at all. No need to trawl through all of your bookmarks.
					</Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel2a-content"
					id="panel2a-header"
				>
					<Typography>What about other Chromium browsers?</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						Our powerfull search feature will help you find saved sites in no
						time at all. No need to trawl through all of your bookmarks.
					</Typography>
				</AccordionDetails>
			</Accordion>
      <Button
      color='primary'
      size="medium"
      >More Info</Button>
			
		</div>
	);
}
