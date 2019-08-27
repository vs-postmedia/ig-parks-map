// custom icon with number in centre
// See: https://medium.com/@nikjohn/creating-a-dynamic-jsx-marker-with-react-leaflet-f75fff2ddb9

import React from 'react';
import L from 'leaflet';
import ReactDOMServer from 'react-dom/server';
import NumberIcon from '../NumberIcon/NumberIcon';
import { Marker } from 'react-leaflet';
import BeerTooltip from '../BeerTooltip/BeerTooltip';
import './BreweryMarker.css';

const BreweryMarker = (props) => {
	const data = props.data;

	// adjust xposition depending on number of digits
	const xpos = data.order > 9 ? '18%' : '35%';

	const customIcon = <NumberIcon 
		number={data.order} 
		className={data.group} 
		size='28' 
		xpos={xpos} ypos='69%'/>

	const numberIcon = new L.divIcon({
		className: 'custom-icon',
		html: ReactDOMServer.renderToString(customIcon)
	});

	return (
		<Marker
			position={[data.lat, data.lon]}
			icon={numberIcon}>
			<BeerTooltip data={data}></BeerTooltip>
         </Marker>
	);
}

export default BreweryMarker;

