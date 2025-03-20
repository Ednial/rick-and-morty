import React from 'react';
import ResidentCard from './ResidentCard';
import './ResidentsList.css';

function ResidentsList({ residents }) {
	return (
		<>
			<div className="residents">
				{residents.map((resident) => (
					<ResidentCard key={resident} url={resident} />
				))}
			</div>
			{residents.length === 0 && (
				<h2 className="residents__empty">No residents found</h2>
			)}
		</>
	);
}

export default ResidentsList;
