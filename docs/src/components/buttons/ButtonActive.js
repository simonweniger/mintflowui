import React from "react";

function ButtonActive() {
  return (
      <div>
        <button className="btn btn-active" role="button" aria-pressed="true">neutral</button> 
        <button className="btn btn-primary btn-active" role="button" aria-pressed="true">primary</button> 
        <button className="btn btn-secondary btn-active" role="button" aria-pressed="true">secondary</button> 
        <button className="btn btn-accent btn-active" role="button" aria-pressed="true">accent</button> 
        <button className="btn btn-link btn-active" role="button" aria-pressed="true">link</button>
      </div>
    );
}
                
export default ButtonActive;