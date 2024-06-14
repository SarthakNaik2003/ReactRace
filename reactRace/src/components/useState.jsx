import React, { useState } from 'react'

function UseState() {
    const [count, setcount] = useState(0)

    const handleClick = () => {
        setcount(count + 1)
    }

    return (
        <>
            <div>button clicked {count} times</div>
            <button onClick={handleClick}>Click me </button>
        </>

    )
}

export default UseState