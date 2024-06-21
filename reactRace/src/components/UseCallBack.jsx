import React, { useCallback, useState } from 'react'
import UseChild from './UseChild';


function UseCallBack() {
    const [add, setAdd] = useState(0);
    const [count, setcount] = useState(0);

    const learning = useCallback(() => {
        //some opration
    }, [count])

    return (
        <div>
            <UseChild learning={learning} count={count} />
            <h2>{add}</h2>
            <button onClick={() => setAdd(add + 1)}> Add</button>
            <h1>{count}</h1>
            <button onClick={() => setcount(count + 2)}> Count</button>
        </div>
    )
}

export default UseCallBack