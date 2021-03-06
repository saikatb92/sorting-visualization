import React from 'react'

export default function Bar(props) {
    const { height, bgColor } = props;

    let barStyle = {
        height: `${height}px`,
        width: "2px",
        backgroundColor: bgColor,
        margin: "0.1vw",
    }
    return (
        <div style={barStyle} />
    )
}
