import { scaleLinear } from 'd3-scale';
import React, { Component } from 'react';
import CircleMap from '../CircleMap/CircleMap';

// data –> might want to load this via ajax if it's large
import mapPoints from '../../data/map-data.json';

// map tiles & attribution
const map_url = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const attribution = '&copy;<a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors';



export class Map extends Component {
	state = {
		data: [],
		radiusKey: 'likes_rate_1k'
	}

	map_defaults = {
		lat: 49.81,
		lon: -122.952182,
		maxZoom: 18,
		minZoom: 12,
		style: 'mapbox://styles/mapbox/basic-v8',
		// style: 'mapbox://styles/mapbox/light-v11',
		zoom: 9
	}

	_scaleData(d) {
		return scaleLinear()
	}

	componentDidMount() {
		const key = this.state.radiusKey;
		const max = this._getMax(mapPoints, key);

		this._scale = scaleLinear()
			.domain([0, max[key]])
			.range([25, 150]);

		this.setState({
			data: this._prepareData(mapPoints)
		});
	}

	_getMax(data, key) {
		return data.reduce((prev, current) => { 
			return (current[key] > prev[key]) ? current : prev;
		});
	}

	_prepareData(data) {
		data.forEach(d => {
			d.radius = this._scale(d[this.state.radiusKey]);
			d.key = this.state.radiusKey
		});
		
		return data;
	}

	render() {
		const params = this.props.params
		const lat = params.get('lat') ? parseFloat(params.get('lat')) : this.map_defaults.lat;
		const lon = params.get('lon') ? parseFloat(params.get('lon')) : this.map_defaults.lon;
		const maxZoom = params.get('maxZoom') ? parseInt(params.get('maxZoom')) : this.map_defaults.maxZoom;
		const minZoom = params.get('minZoom') ? parseInt(params.get('minZoom')) : this.map_defaults.minZoom;
		const zoom = params.get('zoom') ? parseInt(params.get('zoom')) : this.map_defaults.zoom;
		


		return (
			<CircleMap 
				attribution={attribution}
				center={[lat, lon]}
				circleMarkerClassField={this.map_defaults.classField}
				maxZoom={maxZoom}
				minZoom={minZoom}
				points={this.state.data}
				style={this.map_defaults.style}
				tiles={map_url}
				zoom={zoom}>
			</CircleMap>
		);
	}
}

export default Map;