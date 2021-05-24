import React from "react";

function ButtonDisabled() {
  return (
      <div>
        <button className="btn" disabled="disabled">neutral</button> 
        <button className="btn btn-primary" disabled="disabled">primary</button> 
        <button className="btn btn-ghost" disabled="disabled">ghost</button> 
        <button className="btn btn-link" disabled="disabled">link</button> 
        <button className="btn btn-disabled" tabindex="-1" role="button" aria-disabled="true">visually disabled</button>
      </div>
    );
}
                
export default ButtonDisabled;