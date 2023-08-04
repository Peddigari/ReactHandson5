import React from "react";
const UpdatedComponent = (OriginalComponent) => {
  function NewComponent(props) {
  
    return <OriginalComponent  name="Shruthi"/>;
  }
  return NewComponent;
};
export default UpdatedComponent