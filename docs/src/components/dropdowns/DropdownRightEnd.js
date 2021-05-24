import React from "react";

function DropdownRightEnd() {
  return (
    <div class="dropdown dropdown-right dropdown-end">
    <div tabindex="0" class="m-1 btn">Dropdown</div> 
    <ul class="shadow menu dropdown-content bg-base-100 rounded-box w-52">
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
                
export default DropdownRightEnd;