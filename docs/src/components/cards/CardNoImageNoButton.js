import React from "react";

function CardNoImageNoButton() {
  return (
    <div className="flex space-x-6">
      <div className="card shadow">
        <div className="card-body">
          <h2 className="card-title">no border with shadow</h2> 
          <p>Rerum reiciendis beatae tenetur excepturi</p>
        </div>
      </div> 
      <div className="card shadow-lg">
        <div className="card-body">
          <h2 className="card-title">no border with shadow</h2> 
          <p>Rerum reiciendis beatae tenetur excepturi</p>
        </div>
      </div>
    </div>
    );
}
                
export default CardNoImageNoButton;