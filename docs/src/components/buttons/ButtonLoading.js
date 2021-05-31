import React from "react";

function ButtonLoading() {
  return (
      <div className="space-x-10">
        <button className="btn btn-lg loading">loading</button> 
        <button className="btn btn-primary loading">loading</button> 
        <button className="btn btn-sm btn-secondary loading">loading</button> 
        <button className="btn btn-xs btn-accent loading">loading</button>
      </div>
    );
}
                
export default ButtonLoading;