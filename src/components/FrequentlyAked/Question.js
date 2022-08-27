import React, { useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import styled from 'styled-components'


const Question = ({ text, title }) => {
	const [showInfo, setShowInfo] = useState(false);
	return (
		<Article>
			<Header>
				<h4>{title}</h4>
				<button onClick={() => setShowInfo(!showInfo)}>
					{showInfo ? (
						<KeyboardArrowUpIcon className="down" />
					) : (
						<KeyboardArrowDownIcon />
					)}
				</button>
			</Header>
			{showInfo && <p>{text}</p>}
		</Article>
	);
};




const Article = styled.article`

  p {
		text-align: left;
		font-size: .9rem;
	}
  
`

const Header = styled.header`
	display: flex;
	justify-content: space-between;
	border-top: 1px solid #ccc;
	padding: 1.2rem 0 0.5rem 0;

	h4 {
		font-weight: 500;
		&:hover {
			color: #fa5959;
		}
	}

	button {
		border: none;
		padding: 5px;
		background-color: #fff;

		.css-i4bv87-MuiSvgIcon-root {
			color: #5267df;
		}

		.down {
			color: #fa5959 !important;
		}
	}
`;


export default Question;
