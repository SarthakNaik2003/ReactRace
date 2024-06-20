import React, { useState, useRef } from 'react';

function UseRefe() {
    const refElement = useRef(""); // Initialize with null instead of ""
    const [name, setName] = useState("Sarthak");

    function Resetname() {
        setName("");
        if (refElement.current) {
            refElement.current.focus();
        }
    }

    return (
        <div>
            <input ref={refElement} type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <button onClick={Resetname}>Save</button>
        </div>
    );
}

export default UseRefe;
