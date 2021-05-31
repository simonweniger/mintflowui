import React from "react";

function BadgeOutline() {
  return (
    <div className="space-x-10">
      <div className="badge badge-outline">neutral</div> 
      <div className="badge badge-primary badge-outline">primary</div> 
      <div className="badge badge-secondary badge-outline">secondary</div> 
      <div className="badge badge-accent badge-outline">accent</div>
    </div>
  );
}

export default BadgeOutline;