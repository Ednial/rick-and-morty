import { useState, useEffect } from 'react';
import useFetchApi from './hooks/useFetchApi';
import { getRandomItem } from './utils';
import Hero from './components/Hero';
import Search from './components/Search';
import LocationInfo from './components/LocationInfo';
import ResidentsList from './components/ResidentsList';

const baseURL = 'https://rickandmortyapi.com/api/location';
function App() {
	const { data: location, request } = useFetchApi();
	const [locationId, setLocationId] = useState(getRandomItem());

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
