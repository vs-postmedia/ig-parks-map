// https://medium.com/@nikjohn/creating-a-dynamic-jsx-marker-with-react-leaflet-f75fff2ddb9

import React, {Component} from 'react';
import './NumberIcon.css';

export default class SVGIconComponent extends Component {
	render() {
		const number = this.props.number || 0;
		return (
			<svg 
				width={`${this.props.size}px`} 
				height={`${this.props.size}px`} 
				viewBox="0 0 42 42" aria-labelledby="beers-title beers-desc" role="img">
				<circle className={this.props.className} 
					cx="21" cy="21" r="15.91549430918954" role="presentation"></circle>
				<g className="chart-text">
					<text className="chart-number" 
						x={this.props.xpos} 
						y={this.props.ypos}>
							{number}
					</text>
				</g>
			</svg>
		);
	}
}