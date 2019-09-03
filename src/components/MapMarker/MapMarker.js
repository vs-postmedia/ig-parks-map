// custom icon with number in centre
// See: https://medium.com/@nikjohn/creating-a-dynamic-jsx-marker-with-react-leaflet-f75fff2ddb9

import React from 'react';
import L from 'leaflet';
import ReactDOMServer from 'react-dom/server';
import NumberIcon from '../NumberIcon/NumberIcon';
import { Marker } from 'react-leaflet';
import MapTooltip from '../MapTooltip/MapTooltip';
import './MapMarker.css';

const MapMarker = (props) => {
	const data = props.data;

	// adjust xposition for text depending on number of digits
	const xpos = data.order > 9 ? '18%' : '50%';
	const ypos = '69%';

	const customIcon = <NumberIcon 
		// text={Math.round(data[data.key])}
		text={data.park_name.replace(/ Park/g, '')}
		className={data.group || 'circle'} 
		radius={data.radius}
		width={'120'} // in px wide enough to let text flow outside circle
		xpos={xpos} ypos={ypos}/>

	const numberIcon = new L.divIcon({
		className: 'custom-icon',
		html: ReactDOMServer.renderToString(customIcon)
	});

	return (
		<Marker
			position={[data.lat, data.lon]}
			icon={numberIcon}>
			<MapTooltip data={data}></MapTooltip>
         </Marker>
	);
}

export default MapMarker;

