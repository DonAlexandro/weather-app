import {createStore, applyMiddleware, compose} from 'redux'
import createSagaMiddleware from 'redux-saga'
import {rootReducer} from './rootReducer'
import {rootSaga} from './rootSaga'

export type InferActionsTypes<T> = T extends { [keys: string]: (...args: any[]) => infer U } ? U : never

const sagaMiddleware = createSagaMiddleware()

export const store = createStore(rootReducer, compose(
	applyMiddleware(sagaMiddleware),
	// @ts-ignore
	window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
))

sagaMiddleware.run(rootSaga)
