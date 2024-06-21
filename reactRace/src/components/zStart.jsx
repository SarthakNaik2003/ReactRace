import React, { createContext } from "react";
import Props from "./props";
import UseState from "./useState";
import UseEffect from "./UseEffect";
import UseRefe from "./UseRefe"
import ChildA from "./propDriling/ChildA";
import ChildAC from "./ContextAPI/ChildA";
import UseMemo from "./UseMemo";
import UseCallBack from "./UseCallBack";


const data = createContext()
const data1 = createContext()
const Start = () => {

    const name = "Sarthak";
    const gender = "Male"
    return (
        <>
            <UseCallBack />
            {/* <UseMemo /> */}
            {/* <data.Provider value={name}>
                <data1.Provider value={gender}>
                    <ChildAC />
                </data1.Provider>
            </data.Provider> */}
            {/* <ChildA name={name} /> */}
            {/* <UseRefe /> */}
            {/* <UseEffect /> */}
            {/* <UseState /> */}
            {/* <Props name="Sarthak" /> */}
        </>
    )
}

export default Start;
export { data, data1 };