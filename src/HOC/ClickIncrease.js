import React,{useState} from 'react'
import withCounter from "./withCounter";



function ClickIncrease(props) {
    const [fontSize, setFontSize] = useState(10); 
    return (
      <div>
         HOC [HIGHER ORDER COMPONENT]: <br/>
         A higher-order component is a function that takes in a component and returns a new component.<br/>
              syntax: const newComponent = higherFunction(WrappedComponent);
            <ul> <li> newComponent — will be the enhanced component</li>
<li>higherFunction — as the name suggests, this function will enhance WrappedComponent</li>
<li>WrappedComponent — The component whose functionality we want to extend. In other words, this will be the component that we want to enhance</li>
</ul>
 Example of Higher Order Component:<br/>
        <button onClick={() => setFontSize((size) => size + 1)}>
          Increase with click
        </button>
        <p style={{ fontSize }}>Size of font in onClick function: {fontSize}</p>
        <p> receiving  name from props {props.name}</p>
      </div>
    );
  }
  export default withCounter(ClickIncrease);