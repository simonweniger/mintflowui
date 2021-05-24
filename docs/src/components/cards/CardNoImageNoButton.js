import React from "react";

function CardNoImageNoButton() {
  return (
    <div className="flex space-x-6">
      <div class="card shadow">
        <div class="card-body">
          <h2 class="card-title">no border with shadow</h2> 
          <p>Rerum reiciendis beatae tenetur excepturi</p>
        </div>
      </div> 
      <div class="card shadow-lg">
        <div class="card-body">
          <h2 class="card-title">no border with shadow</h2> 
          <p>Rerum reiciendis beatae tenetur excepturi</p>
        </div>
      </div>
    </div>
    );
}
                
export default CardNoImageNoButton;