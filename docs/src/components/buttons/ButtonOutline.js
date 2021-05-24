import React from "react";

function ButtonOutline() {
  return (
      <div>
        <button className="btn btn-outline">neutral</button> 
        <button className="btn btn-outline btn-primary">primary</button> 
        <button className="btn btn-outline btn-secondary">secondary</button> 
        <button className="btn btn-outline btn-accent">accent</button>
      </div>
    );
}
                
export default ButtonOutline;