import React from "react";

function StatRowItemsCenter() {
  return (
    <div class="stats shadow w-full">
      <div class="stat place-items-center place-content-center">
        <div class="stat-title">Downloads</div> 
        <div class="stat-value">310M</div> 
        <div class="stat-desc">Jan 1st - Feb 1st</div>
      </div> 
      <div class="stat place-items-center place-content-center">
        <div class="stat-title">New Users</div> 
        <div class="stat-value text-success">4,200</div> 
        <div class="stat-desc text-success">↗︎ 400 (22%)</div>
      </div> 
      <div class="stat place-items-center place-content-center">
        <div class="stat-title">New Registers</div> 
        <div class="stat-value text-error">1,200</div> 
        <div class="stat-desc text-error">↘︎ 90 (14%)</div>
      </div>
    </div>
    );
}
                
export default StatRowItemsCenter;