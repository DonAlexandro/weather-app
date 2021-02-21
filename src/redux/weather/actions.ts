import {WeatherType} from './reducer'

export const actions = {
	fetchWeatherRequest: (city: string) => ({
		type: 'FETCH_WEATHER_REQUEST',
		city
	} as const),
	fetchWeatherSuccess: (weather: WeatherType) => ({
		type: 'FETCH_WEATHER_SUCCESS',
		weather
	} as const),
	fetchWeatherError: (error: string) => ({
		type: 'FETCH_WEATHER_ERROR',
		error
	} as const)
}
