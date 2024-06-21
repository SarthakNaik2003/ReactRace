import React, { useContext } from 'react'
import { data, data1 } from '../zStart'

function ChildAC() {
    const Name = useContext(data);
    const Gender = useContext(data1);

    return (

        <>
            <h1>hello i m {Name} my Gender is {Gender} </h1>
        </>

        // <data.Consumer>
        //     {
        //         (name) => {
        //             return (
        //                 <data1.Consumer>
        //                     {
        //                         (gender) => {
        //                             return (
        //                                 <h1>my name is {name} and gender is {gender}</h1>
        //                             )
        //                         }
        //                     }
        //                 </data1.Consumer>
        //             )
        //         }
        //     }
        // </data.Consumer>

    )
}

export default ChildAC