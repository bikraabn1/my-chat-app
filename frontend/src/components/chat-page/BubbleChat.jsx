import React from 'react'
import { Card } from 'antd'

const BubbleChat = ({ text, left }) => {
    return (
        <Card size='small' style={{ maxWidth: 700, background: '#1677FF', alignSelf: left ? 'flex-end' : 'flex-start' }}>
            <p style={{ color: "#ffffff" }}>{text}</p>
        </Card>
    )
}

export default BubbleChat