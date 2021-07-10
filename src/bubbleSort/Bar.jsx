import React from 'react'

export default function Bar(props) {
    const { height, bgColor } = props;

    let barStyle = {
        height: `${height}px`,
        width: "20px",
        backgroundColor: bgColor,
        margin: "4px",
    }
    return (
        <div style={barStyle} />
    )
}
