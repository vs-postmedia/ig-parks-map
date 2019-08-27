import React, { Component } from 'react';
import { Map, /*TileLayer,*/ Polyline } from 'react-leaflet';
import MapboxGLLayer from '../MapboxGLLayer/MapboxGLLayer';
import BreweryMarker from '../BreweryMarker/BreweryMarker';

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
					style='mapbox://styles/mapbox/basic-v8'/>

					{
						this.props.routes.map(d => {
							return (<Polyline color={d.colour} key={d.route} positions={d.route} />)
						})
					}
					{
						this.props.points.map(d => {
							return (
								<BreweryMarker data={d} key={d.name.replace(/\s/g, '-')}></BreweryMarker>
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