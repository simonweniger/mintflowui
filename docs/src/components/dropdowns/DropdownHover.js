import React from "react";

function DropdownHover() {
  return (
    <div class="dropdown dropdown-hover">
      <div tabindex="0" class="m-1 btn">open on hover</div> 
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
                
export default DropdownHover;