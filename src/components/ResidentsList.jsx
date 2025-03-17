import React from 'react';
import ResidentCard from './ResidentCard';
import './ResidentsList.css';

function ResidentsList({ residents }) {
	return (
		<div className="reisdents">
			{residents.map((resident) => (
				<ResidentCard key={resident} url={resident} />
			))}
		</div>
	);
}

export default ResidentsList;
