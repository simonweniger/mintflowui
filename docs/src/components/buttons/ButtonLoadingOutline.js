import React from "react";

function ButtonLoadingOutline() {
  return (
      <div>
        <button className="btn btn-sm btn-outline btn-primary loading">loading</button> 
        <button className="btn btn-sm btn-outline btn-secondary loading">loading</button> 
        <button className="btn btn-sm btn-outline btn-accent loading">loading</button> 
        <button className="btn btn-sm btn-ghost loading">loading</button>
      </div>
    );
}
                
export default ButtonLoadingOutline;