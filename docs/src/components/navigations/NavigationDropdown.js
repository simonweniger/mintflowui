import React from "react";

function NavigationDropdown() {
  return (
    <div className="navbar mb-2 bg-base-300 rounded-box">
      <div className="flex-1 px-2 lg:flex-none">
        <a className="text-lg font-bold">
        MintFlow
        </a>
      </div> 
      <div className="flex justify-end flex-1 px-2">
        <div className="flex items-stretch">
          <a className="btn btn-ghost rounded-btn">
            Button
          </a> 
          <div className="dropdown dropdown-end">
            <div tabindex="0" className="btn btn-ghost rounded-btn">Dropdown</div> 
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
        </div>
      </div>
    </div>
    );
}
                
export default NavigationDropdown;