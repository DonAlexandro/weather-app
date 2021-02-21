import React from 'react'

type PropsType = {
	value: string
}

export const DateDisplay: React.FC<PropsType> = ({value}) => {
	const date = new Intl
		.DateTimeFormat('en-US', {hour: 'numeric', minute: '2-digit'})
		.format(new Date(value))

	return (
		<span>{date}</span>
	)
}
