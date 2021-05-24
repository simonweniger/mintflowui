import React from "react";

function ButtonLoadingSquare() {
  return (
      <div>
        <button className="btn btn-lg btn-square loading"></button> 
        <button className="btn btn-square loading"></button> 
        <button className="btn btn-sm btn-square loading"></button> 
        <button className="btn btn-xs btn-square loading"></button>
      </div>
    );
}
                
export default ButtonLoadingSquare;