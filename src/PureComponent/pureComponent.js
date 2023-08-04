import React, { useState } from 'react'

function PureComponent() {
    const [name] = useState("Shruthi")
    return (
        <div className="purecomp">
        <div> Pure Component:A React component is considered pure if it renders the same output for the same state and props. 
        <div>
         Example : Printing name from PURE COMPONENT without using state and props : {name}
        <hr></hr></div></div></div>
    )
}

export default PureComponent
