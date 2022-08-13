import React, {useState} from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Button } from '@mui/material';
import './Question.css'

function Question({ ExpandMore, ExpandLess, title, text }) {
  const {expand, setExpand} = useState(false)

	return (
		<div>
			<Accordion>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel1a-content"
					id="panel1a-header"
				>
					<Typography>{title}</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						{text}
					</Typography>
				</AccordionDetails>
			</Accordion>
		</div>
	);
}

export default Question