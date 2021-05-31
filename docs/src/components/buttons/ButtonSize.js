import React from "react";

function ButtonSize() {
  return (
      <div className="space-x-10">
        <button className="btn btn-lg">Large</button> 
        <button className="btn">Normal</button> 
        <button className="btn btn-sm">Small</button> 
        <button className="btn btn-xs">Tiny</button>
      </div>
    );
}
                
export default ButtonSize;