import React from "react";

function Drawer() {
  return (
    <div className="rounded-lg shadow bg-base-200 drawer h-52">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" /> 
      <div className="flex flex-col items-center justify-center drawer-content">
        <label for="my-drawer" className="btn btn-primary drawer-button">open menu</label>
      </div> 
      <div className="drawer-side">
        <label for="my-drawer" className="drawer-overlay"></label> 
        <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
          <li>
            <a>Menu Item</a>
          </li> 
          <li>
            <a>Menu Item</a>
          </li>
        </ul>
      </div>
    </div>
    );
}
                
export default Drawer;