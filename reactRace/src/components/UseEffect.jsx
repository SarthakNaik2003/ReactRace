import React, { useEffect, useState } from 'react'

function UseEffect() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState("Ram")

    const handleClick = () => {
        setCount(count + 1)
    }

    const handleUpdateName = () => {
        setName(name === "Ram" ? "Seeta" : "Ram")
    }

    useEffect(() => {
        console.log("component mounted")
    }, [name])
    return (
        <>
            <h1>{name}</h1>
            <div>button clicked {count} times </div>
            <button onClick={handleClick}>click me </button>
            <button onClick={handleUpdateName}>my name </button>
        </>
    )
}

export default UseEffect