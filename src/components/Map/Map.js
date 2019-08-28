import React, { Component } from 'react';
import CircleMap from '../CircleMap/CircleMap';

// data –> might want to load this via ajax if it's large
import mapPoints from '../../data/park-data.json';

// map tiles & attribution
const map_url = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const attribution = '&copy;<a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors';




export class Map extends Component {
	state = {
		data: []
	}

	map_defaults = {
		lat: 49.266943,
		lon: -123.103182,
		maxZoom: 18,
		minZoom: 12,
		style: 'mapbox://styles/mapbox/basic-v8',
		zoom: 15
	}

	componentDidMount() {
		this.setState({
			data: this._prepareData(mapPoints)
		});
	}

	_prepareData(data) {
		data.forEach(d => {
			d.radius = d['2018'] / 10000
		});
		
		return data;
	}

	render() {
		const params = this.props.params
		const lat = params.get('lat') ? parseFloat(params.get('lat')) : this.map_defaults.lat;
		const lon = params.get('lon') ? parseFloat(params.get('lon')) : this.map_defaults.lon;
		const mapStyle = params.get('mapStyle') ? parseInt(params.get('mapStyle')) : this.map_defaults.mapStyle;
		const maxZoom = params.get('maxZoom') ? parseInt(params.get('maxZoom')) : this.map_defaults.maxZoom;
		const minZoom = params.get('minZoom') ? parseInt(params.get('minZoom')) : this.map_defaults.minZoom;
		const zoom = params.get('zoom') ? parseInt(params.get('zoom')) : this.map_defaults.zoom;
		


		return (
			<CircleMap 
				attribution={attribution}
				center={[lat, lon]}
				circleMarkerClassField={this.map_defaults.classField}
				// routes={mapRoutes}
				points={this.state.data}
				maxZoom={maxZoom}
				minZoom={minZoom}
				tiles={map_url}
				zoom={zoom}>
			</CircleMap>
		);
	}
}

export default Map;