import React from "react";

function NavigationLeftButtons() {
  return (
    <nav class="navbar mb-2 bg-base-100 text-base-content rounded-box">
      <div class="flex-none px-2 mx-2">
        <span class="text-lg font-bold">
          MintFlow UI
        </span>
      </div>
      <div class="h-8 my-auto divider divider-vertical"></div> 
      <div class="flex-1 px-4">
        <div class="items-stretch hidden lg:flex">
          <a class="btn btn btn-link body-bold">
            Home
          </a> 
          <a class="btn btn btn-link body-bold">
            Marketplace
          </a> 
          <a class="btn btn btn-link body-bold">
            Discover
          </a> 
        </div>
      </div>
      <div class="flex-none hidden px-2 mx-2 lg:flex">
        <div class="flex items-stretch">
            <a class="btn btn-link body-bold">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokelinecap="round" strokelinejoin="round" strokewidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              Collection
            </a>
            <a class="btn btn-link body-bold">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokelinecap="round" strokelinejoin="round" strokewidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              Dashboard
            </a>
        </div>
      </div>
      <div class="flex-none">
      <button class="btn btn-outline">Login</button> 
      </div> 
    </nav>
    );
}
                
export default NavigationLeftButtons;