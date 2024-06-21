import React, { useMemo, useState } from 'react'

function UseMemo() {
    const [add, setAdd] = useState(0);
    const [sub, setSub] = useState(100);

    const multiply = useMemo(() => {
        console.log("########");
        return add * 10;
    }, [add])
    return (
        <div>
            {multiply}
            <button onClick={() => setAdd(add + 1)}>Add</button>
            {add}
            <button onClick={() => setSub(sub - 1)}>Sub</button>
            {sub}
        </div>
    )
}

export default UseMemo