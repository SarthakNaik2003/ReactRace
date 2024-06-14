import React from "react";

function Props(props) {
    console.log(props)
    return (
        <>
            <h1>Har Har Mahadev </h1>
            <h3>i m {props.name}</h3>
        </>
    )
}

export default Props