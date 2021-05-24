import React from "react";

function DropdownHelper() {
  return (
    <div class="dropdown dropdown-end">
      <div tabindex="0" class="btn btn-circle btn-ghost btn-xs text-info">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline w-5 h-5 stroke-current">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
      </div> 
      <div tabindex="0" class="shadow card compact dropdown-content bg-base-100 rounded-box w-52">
        <div class="card-body">
          <h2 class="card-title">You needed more info?</h2> 
          <p>Here is more info you wanted. You're welcome!</p>
        </div>
      </div>
    </div>
    );
}
                
export default DropdownHelper;