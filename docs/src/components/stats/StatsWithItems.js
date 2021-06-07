import React from "react";

function StatsWithItems() {
  return (
    <>
    <div class="stats border border-base-300">
      <div class="stat">
        <div class="stat-title">Account balance</div> 
        <div class="stat-value">$89,400</div> 
        <div class="stat-actions">
          <button class="btn btn-sm btn-success">Add funds</button>
        </div>
      </div> 
      <div class="stat">
        <div class="stat-title">Current balance</div> 
        <div class="stat-value">$89,400</div> 
        <div class="stat-actions">
          <button class="btn btn-sm btn-primary">Withdrawal</button> 
          <button class="btn btn-sm btn-primary">deposit</button>
        </div>
      </div>
    </div> 
    <div class="stats w-full border border-base-300 mt-2">
      <div class="stat">
        <div class="stat-figure text-primary">
          <button class="btn loading btn-circle btn-lg bg-base-200 btn-ghost"></button>
        </div> 
        <div class="stat-value">4,900/7,300</div> 
        <div class="stat-title">Files transfered</div> 
        <div class="stat-desc">
          <progress value="60" max="100" class="progress progress-secondary"></progress>
        </div>
      </div>
    </div>
    </>
    );
}
                
export default StatsWithItems;