import { useState, useEffect } from 'react';
import useFetchApi from './hooks/useFetchApi';
import ResidentsList from './components/ResidentsList';
import LocationInfo from './components/LocationInfo';
import Search from './components/Search';
import Hero from './components/Hero';

const baseURL = 'https://rickandmortyapi.com/api/location';
function App() {
	const { data: location, request } = useFetchApi();
	const [locationId, setLocationId] = useState('3');

	useEffect(() => {
		request(`${baseURL}/${locationId}`);
	}, [locationId]);
	return (
		<div>
			{/* Hero */}
			<Hero />
			{/* Search */}
			<Search setLocationId={setLocationId} />
			{/* LocationInfo */}
			{location && <LocationInfo location={location} />}

			{/* ResidentsList */}
			{location && <ResidentsList residents={location?.residents} />}
		</div>
	);
}

export default App;
