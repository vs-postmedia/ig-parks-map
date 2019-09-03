// https://medium.com/@nikjohn/creating-a-dynamic-jsx-marker-with-react-leaflet-f75fff2ddb9

import React, {Component} from 'react';
import './NumberIcon.css';

export default class SVGIconComponent extends Component {
	render() {
		const text = this.props.text || 0;
		const radius = this.props.radius || 5;
		const diameter = this.props.radius * 2 || 10;

		const style = {
			// transform: `translate(-${radius / 2}px, -${radius / 2}px)`
			transform: `translate(-${this.props.width / 2}px, -${radius / 2}px)`
		}
		return (
			<svg style={style}
				// width={`${radius}px`} 
				width={this.props.width}
				height={`${radius}px`} 
				viewBox={`0 0 ${diameter} ${diameter}`} aria-labelledby="circle" role="img">
				<circle className={this.props.className} 
					cx={radius} cy={radius}
					r={this.props.radius}
					role="presentation">
				</circle>
				<g className="chart-text"></g>
				<text className="chart-number" 
					textAnchor="middle"
					x={this.props.xpos} 
					y={this.props.ypos}>
						{text}
				</text>
			</svg>
		);
	}
}