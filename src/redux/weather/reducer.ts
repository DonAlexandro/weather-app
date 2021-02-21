import {InferActionsTypes} from '../store'
import {actions} from './actions'

export type WeatherType = {
	location: string,
	temp: number,
	text: string,
	icon: string,
	feelslike: number,
	date: string
}

const initialState = {
	weather: {} as WeatherType,
	loading: false,
	error: null as string | null
}

export type InitialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof actions>

export const weatherReducer = (state = initialState, action: ActionsType): InitialStateType => {
	switch (action.type) {
	case 'FETCH_WEATHER_REQUEST':
		return {...state, loading: true}
	case 'FETCH_WEATHER_SUCCESS':
		return {...state, weather: action.weather, loading: false}
	case 'FETCH_WEATHER_ERROR':
		return {...state, error: action.error, loading: false}
	default: return state
	}
}
