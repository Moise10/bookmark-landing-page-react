import { Button } from '@mui/material';
import React, {useState} from 'react'
import './Features.css'
import Tab_1 from '../../images/illustration-features-tab-1.svg'
import Tab_2 from '../../images/illustration-features-tab-2.svg'
import Tab_3 from '../../images/illustration-features-tab-3.svg'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';


function Features() {

  const features = ['Simple Bookmarking', 'Speedy Searching', 'Easy Sharing']
  const title = ['Bookmark in one click', 'Intelligent Search', 'Share your Bookmark']

  const text = ['Organize your bookmarks however you like. our simple drag-and-drop interface gives you complete control over how you manage your favorite sites', 'Our powerfull search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.', 'Easily share your bookmarks and collections with others.Create a shareable link that you can send at the click of a button ']


  const [selection, setSelection] = useState('')
	const [selected, setSelected] = useState(false);


  const select = () => {
    setSelected(prev => !prev)
  }

	const settingFeatures = (feature) => {
		if(selection){
			setSelected(prev => !prev)
		}
		setSelection(feature)
	}


  return (
		<div className="features">
			<div className="features_header">
				<h1 className="features_title">Features</h1>
				<p className="text">
					Our aim is to kame it quick and easy for you to access your favorite
					websites.Your bookmarks sync between your devices so you can access
					them on the go.
				</p>
			</div>
			<div className="features__tags">
				<div className="tags">
					{features.map((feature) => (
						<Button
							style={{
								width: '100%',
								borderBottom: '2px solid hsl(0, 94%, 66%)',
								borderRadius: 0,
							}}
							onClick={() => settingFeatures(feature)}
							key={feature}
						>
							{feature}
						</Button>
					))}
				</div>
				<div className="features__display">
					<p>
						{selection === 'Simple Bookmarking' && (
							<Simple src={Tab_1} title={title[0]} text={text[0]} />
						)}
					</p>
					<p>
						{selection === 'Speedy Searching' && (
							<Simple src={Tab_2} title={title[1]} text={text[1]} />
						)}
					</p>
					<p>
						{selection === 'Easy Sharing' && (
							<Simple src={Tab_3} title={title[2]} text={text[2]} />
						)}
					</p>
				</div>
			</div>
		</div>
	);
}

const Simple = ({src, title, text}) => {
  return (
		<div className="simpleBooking__container">
			<div className="simple__img">
				<img src={src} alt="" />
			</div>
			<div className="simple__description">
				<h1>{title}</h1>
				<p className="text">{text}</p>
				<Button
				color="primary" size="small">
					More Info
				</Button>
			</div>
		</div>
	);
}

export default Features