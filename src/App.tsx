import React from 'react'
import {Card, Col, Divider, Layout, Row, Typography} from 'antd'
import Search from 'antd/es/input/Search'
import {AntCloudOutlined} from '@ant-design/icons/lib'

const {Title, Text} = Typography

export const App: React.FC = () => {
	const onSearch = (value: string) => {
		console.log(value)
	}

	return (
		<Layout className="layout">
			<Card className="weather-card">
				<Row className="weather-card-header">
					<Col span={12}>
						<Title level={4}>Weather App</Title>
					</Col>
					<Col span={12}>
						<Search placeholder="Enter your city" onSearch={onSearch} enterButton />
					</Col>
				</Row>
				<Divider />
				<div className="main-info-wrapper">
					<Title level={4}>Kyiv, Kiev, Ukraine Weather</Title>
					<Title level={5} type="secondary">As of 11:59 pm EET</Title>
					<Row>
						<Col span={12}>
							<Title>0°</Title>
							<Title level={3}>Cloudy</Title>
						</Col>
						<Col span={12}>
							<Title style={{textAlign: 'right'}} type="secondary"><AntCloudOutlined /></Title>
							<Title level={3} style={{textAlign: 'right'}}>--/-2°</Title>
						</Col>
					</Row>
					<Text>45% chance of snow through 1 am</Text>
				</div>
				<Divider />
			</Card>
		</Layout>
	)
}
