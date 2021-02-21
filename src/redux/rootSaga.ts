import {all, fork} from 'redux-saga/effects'
import {weatherSagaWatcher} from './weather/sagas'

export function* rootSaga() {
	yield all([fork(weatherSagaWatcher)])
}
