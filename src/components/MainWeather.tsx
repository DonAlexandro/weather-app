import React, {useEffect} from 'react'
import {Col, Row, Typography, message, Empty, Image} from 'antd'
import {useSelector} from 'react-redux'
import {AppState} from '../redux/rootReducer'
import {DateDisplay} from './DateDisplay'

const {Title} = Typography

export const MainWeather: React.FC = () => {
	const {weather, error} = useSelector((state: AppState) => state.weather)

	useEffect(() => {
		error?.length && message.error(error)
	}, [error])

	return (
		Object.keys(weather).length ?
			<div className="main-info-wrapper">
				<Title level={4}>{weather.location}</Title>
				<Title level={5} type="secondary">As of <DateDisplay value={weather.date}/></Title>
				<Row>
					<Col span={12}>
						<Title>{Math.floor(weather.temp)}°</Title>
						<Title level={3}>{weather.text}</Title>
					</Col>
					<Col span={12}>
						<Title style={{textAlign: 'right'}}>
							<img src={weather.icon} alt={weather.text} width={64}/>
						</Title>
						<Title level={3} style={{textAlign: 'right'}}>Feels Like: {Math.floor(weather.feelslike)}°</Title>
					</Col>
				</Row>
			</div>
			:
			<Empty image="https://cdn0.iconfinder.com/data/icons/weather-line-19/32/Sunny-256.png" description="Start searching weather in your city"/>
	)
}
