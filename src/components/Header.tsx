import React from 'react'
import { Menu, Layout, Typography } from 'antd'

const {Header} = Layout
const {Title} = Typography

export const Navbar: React.FC = () => {
	return (
		<Header>
			<Title level={4} style={{color: '#fff'}}>Sunny Weather</Title>
			<Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
				<Menu.Item key="1">nav 1</Menu.Item>
				<Menu.Item key="2">nav 2</Menu.Item>
				<Menu.Item key="3">nav 3</Menu.Item>
			</Menu>
		</Header>
	)
}
