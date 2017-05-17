const API_KEY = 'f1d9ced1e9598af68a63b50ad67f3695';
const ROUTE_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
import axios from 'axios';

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
	const url = `${ROUTE_URL}&q=${city},us`;

	const request = axios.get(url);
	return {
		type: FETCH_WEATHER,
		payload: request
	};
}
