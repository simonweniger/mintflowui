import React from "react";

function DropdownOpen() {
  return (
    <div className="dropdown dropdown-open">
      <div tabindex="0" className="m-1 btn">force open</div> 
      <div className="w-64 shadow card dropdown-content bg-primary text-primary-content">
        <div className="card-body">
          <h2 className="card-title">This is a card!</h2> 
          <p>you can use any element with `dropdown-content` class.</p>
        </div>
      </div>
    </div>
    );
}
                
export default DropdownOpen;