import * as React from 'react'
import Question from './Question'
import './FrequentlyAked.css'
import styled from 'styled-components'



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
		<Container>
			<h1>Frequently Asked Questions</h1>
			<p>
				Here are some of our FAQs.If you have any other questions you'd like
				answered please feel free to email us
			</p>
			<Flex>
				{Questions.map((question) => (
					<Question
						key={question.text}
						text={question.text}
						title={question.title}
					/>
				))}
			</Flex>
			<Button>More Info</Button>
		</Container>
	);
}

const Flex = styled.div`
  display: flex;
	flex-direction: column;
	gap: 1rem;
	margin: 3rem 0;
`


const Container = styled.div`
	padding: 2rem;
	text-align: center;
	max-width: 600px;
	margin: 0 auto;
`;

const Button = styled.button`
	display: inline-block;
	padding: 1em 1.5em;
	font-size: 0.625rem;
	text-transform: uppercase;
	font-weight: 900;
	letter-spacing: 1px;
	border: 0;
	cursor: pointer;
	background-color: blue;
	color: #fff;
	margin: 0 auto;
`;
