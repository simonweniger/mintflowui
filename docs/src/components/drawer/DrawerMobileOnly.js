import React from "react";

function DrawerMobileOnly() {
  return (
    <div className="rounded-lg shadow bg-base-200 drawer drawer-mobile h-52">
    <input id="my-drawer-2" type="checkbox" className="drawer-toggle" /> 
    <div className="flex flex-col items-center justify-center drawer-content">
      <label for="my-drawer-2" className="mb-4 btn btn-primary drawer-button lg:hidden">open menu</label> 
      <div className="hidden text-xs text-center max-w-xs lg:block">Menu is always open on desktop size.
        Resize the browser to see toggle button on mobile size
      </div> 
      <div className="text-xs text-center max-w-xs lg:hidden">Menu can be toggled on mobile size.
        Resize the browser to see fixed sidebar on desktop size
      </div>
    </div> 
    <div className="drawer-side">
      <label for="my-drawer-2" className="drawer-overlay"></label> 
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
                
export default DrawerMobileOnly;