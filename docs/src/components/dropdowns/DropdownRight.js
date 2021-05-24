import React from "react";

function DropdownRight() {
  return (
    <div className="dropdown dropdown-right">
      <div tabindex="0" className="m-1 btn">Dropdown</div> 
      <ul className="shadow menu dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <a>Item 1</a>
        </li> 
        <li>
          <a>Item 2</a>
        </li> 
        <li>
          <a>Item 3</a>
        </li>
      </ul>
    </div>
    );
}
                
export default DropdownRight;