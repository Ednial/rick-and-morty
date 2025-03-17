import React from 'react';
import './LocationInfo.css';

function LocationInfo({ location }) {
	return (
		<div className="location">
			<h2>{location.name}</h2>
			<ul>
				<li>
					<span>Type:</span> {location.type}
				</li>
				<li>
					<span>Dimension:</span> {location.dimension}
				</li>
				<li>
					<span>Population:</span> {location.residents?.length}
					{location.residents?.length === 1 ? ' resident' : ' residents'}
				</li>
			</ul>
		</div>
	);
}

export default LocationInfo;
