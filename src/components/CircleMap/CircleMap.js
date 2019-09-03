import React, { Component } from 'react';
import { Map } from 'react-leaflet';
import MapboxGLLayer from '../MapboxGLLayer/MapboxGLLayer';
import MapMarker from '../MapMarker/MapMarker';

import './CircleMap.css';
import 'leaflet/dist/leaflet.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import MAPBOX_TOKEN from '../../data/mapbox-token';


export class CircleMap extends Component {
	render() {
		return (
			<Map 
				center={this.props.center} 
				zoom={this.props.zoom} >
		
				<MapboxGLLayer
					accessToken={MAPBOX_TOKEN}
					attribution={this.props.attribution}
					style={this.props.style} />

					{
						this.props.points.map(d => {
							return (
								<MapMarker data={d} key={d.hashtag}></MapMarker>
							)
						})
					}
			</Map>
		);
	}
}


export default CircleMap;

/*
<MapboxGLLayer
	accessToken={MAPBOX_TOKEN}
	style='mapbox://styles/mapbox/streets-v9'/>

<TileLayer url={this.props.tiles} 
	attribution={this.props.attribution} 
	maxZoom={this.props.maxZoom}
	minZoom={this.props.minZoom}/>

*/