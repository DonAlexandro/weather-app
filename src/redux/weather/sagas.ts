import {call, put, takeEvery} from 'redux-saga/effects'
import {actions} from './actions'

const {fetchWeatherSuccess, fetchWeatherError} = actions

const getWeather = async (city: string) => {
	const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_API_KEY}&q=${city}`)
	const {location, current} = await response.json()

	return {
		location: `${location.name}, ${location.country}`,
		temp: current.temp_c,
		text: current.condition.text,
		icon: current.condition.icon,
		feelslike: current.feelslike_c,
		date: current.last_updated
	}
}

type weatherActionSagaType = {
	type: string,
	city: string
}

function* weatherSagaWorker(action: weatherActionSagaType) {
	try {
		const response = yield call(getWeather, action.city)

		if (response.error) {
			yield put(fetchWeatherError('Щось пішло не так...'))
			console.log(response)
		} else {
			yield put(fetchWeatherSuccess(response))
		}
	} catch (e) {
		yield put(fetchWeatherError('Щось пішло не так...'))
		console.error(e)
	}
}

export function* weatherSagaWatcher() {
	yield takeEvery('FETCH_WEATHER_REQUEST', weatherSagaWorker)
}
