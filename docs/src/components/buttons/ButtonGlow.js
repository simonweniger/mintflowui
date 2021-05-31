import React from "react";

function ButtonGlow() {
  return (
      <div className="space-x-10">
        <button className="btn btn-glow" role="button" aria-pressed="true">neutral</button> 
        <button className="btn btn-primary btn-glow" role="button" aria-pressed="true">primary</button> 
        <button className="btn btn-secondary btn-glow" role="button" aria-pressed="true">secondary</button> 
        <button className="btn btn-accent btn-glow" role="button" aria-pressed="true">accent</button> 
        <button className="btn btn-link btn-glow" role="button" aria-pressed="true">link</button>
      </div>
    );
}
                
export default ButtonGlow;