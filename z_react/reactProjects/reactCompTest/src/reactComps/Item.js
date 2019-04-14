import React from "react";

const Item = (props) => {
    const grid={
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gridTemplateRows: "1fr .5fr",
        width: 850,
    }
    const h2={
        display: "grid",
        gridTemplateColumns: "2fr 2fr 3fr",
        gridTemplateRows: "1fr",
        position: "relative",
        top: 40,
        right: 400,
    }
    return (
    <div style={grid}>
        <h1>For Sale: {props.name}</h1>
        <div style={h2}>
            <h2>Price: {props.price}</h2>
            <h2>In Stock: {props.available_stock}</h2>
        </div>
    </div>)
}

export default Item