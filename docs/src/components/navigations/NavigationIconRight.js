import React from "react";

function NavigationIconRight() {
  return (
    <div class="navbar mb-2 shadow-lg bg-neutral text-neutral-content rounded-box">
      <div class="flex-1 px-2 mx-2">
        <span class="text-lg font-bold">
        MintFlow UI
        </span>
      </div> 
      <div class="flex-none">
        <button class="btn btn-square btn-ghost">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current text-error"> 
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
    </div>
    );
}
                
export default NavigationIconRight;