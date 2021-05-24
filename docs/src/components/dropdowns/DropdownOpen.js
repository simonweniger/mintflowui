import React from "react";

function DropdownOpen() {
  return (
    <div class="dropdown dropdown-open">
      <div tabindex="0" class="m-1 btn">force open</div> 
      <div class="w-64 shadow card dropdown-content bg-primary text-primary-content">
        <div class="card-body">
          <h2 class="card-title">This is a card!</h2> 
          <p>you can use any element with `dropdown-content` class.</p>
        </div>
      </div>
    </div>
    );
}
                
export default DropdownOpen;