import { React, memo } from 'react'

function UseChild({ learning, count }) {
    console.log("Child Component");
    return (
        <div>
        </div>
    )
}

export default memo(UseChild)