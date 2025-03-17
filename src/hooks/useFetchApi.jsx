import axios from 'axios';
import { useState } from 'react';

function useFetchApi() {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	const request = async (url) => {
		setLoading(true);
		try {
			const res = await axios.get(url);
			setData(res.data);
		} catch (error) {
			console.error(error);
			setError(error.response?.data?.message || error.message);
		} finally {
			setTimeout(() => {
				setLoading(false);
			}, 3000);
		}
	};

	return { data, loading, error, request };
}

export default useFetchApi;
