import React from 'react'
import {useSelector} from 'react-redux'
import {Card, Divider, Layout, Spin} from 'antd'
import {AppState} from './redux/rootReducer'
import {Header} from './components/Header'
import {MainWeather} from './components/MainWeather'

export const App: React.FC = () => {
	const {loading} = useSelector((state: AppState) => state.weather)

	return (
		<Layout className="layout">
			<Card className="weather-card">
				<Header />
				<Divider />
				{loading ?
					<Spin tip="Loading...">
						<MainWeather />
					</Spin >
					:
					<MainWeather />
				}
			</Card>
		</Layout>
	)
}
