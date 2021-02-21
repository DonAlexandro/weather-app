import React from 'react'
import {Col, Row, Typography} from 'antd'
import Search from 'antd/es/input/Search'
import {useDispatch} from 'react-redux'
import {actions} from '../redux/weather/actions'

const {Title} = Typography

export const Header: React.FC = () => {
	const dispatch = useDispatch()

	const onSearch = (value: string) => {
		if (value.length) {
			dispatch(actions.fetchWeatherRequest(value))
		}
	}

	return (
		<Row className="weather-card-header">
			<Col span={12}>
				<Title level={4}>Weather App</Title>
			</Col>
			<Col span={12}>
				<Search placeholder="Enter your city" onSearch={onSearch} enterButton />
			</Col>
		</Row>
	)
}
