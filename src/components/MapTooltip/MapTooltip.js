import React from 'react';
import { Tooltip } from 'react-leaflet';
import './MapTooltip.css';

const MapTooltip = (props) => {
	let img;
	const data = props.data;
	// load folder of images
	const images = require.context('../../images', true);
	// set background colour of rating based on rating value
	const className = setBackgroundColor(data.rating);

	// set tooltip image
	if (data.image) {
		img = <img src={images(`./${data.image}`)} 
			className='tooltip-image' 
			alt={`${data.park_name}`}/>
	} else {
		img = null;
	}
	
	return (
		<Tooltip className='tooltip' opacity='1'>
			<header>
				<h2 className='name'>{data.park_name.replace(/ Park/, '')}</h2>
				<div className={`rating-background ${data.correlation_strength}`}>
					<h2 className='rating'>{`${data.correlation_strength} correlation`}</h2>
				</div>
			</header>
			{img}
			<p className="tooltip-copy">
				{`There is a ${data.correlation_strength} correlation between the number of “likes” for #${data.hashtag} hashtags and attendance at the park. In 2018, there were roughly ${numberWithCommas(Math.ceil(data[data.key] / 100) * 100)} “likes” on related hashtags for each of the ${numberWithCommas(data.attendance)} visits to the park.`}
			</p>	

			<p className='grey02 footer'>{`Photo from ${data.img_user_id}, via Instagram`}</p>
		</Tooltip>
	);
}

function setBackgroundColor(rating) {
	let className;
	if (rating > 75) {
		className = 'green';
	} else if (rating <= 75 && rating > 65) {
		className = 'yellow';
	} else {
		className = 'red';
	}

	return className;
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

}

export default MapTooltip;


/*
<p>{`Attendance: ${numberWithCommas(data.attendance)}`}</p>
<p>{`Instagram likes per thousand visitors (est.): ${numberWithCommas(Math.ceil(data[data.key] / 100) * 100)}`}</p>
*/