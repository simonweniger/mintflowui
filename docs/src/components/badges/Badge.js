import React from "react";

function Badge() {
  return (
    <div>
      <div className="badge">neutral</div> 
      <div className="badge badge-primary">primary</div> 
      <div className="badge badge-secondary">secondary</div> 
      <div className="badge badge-accent">accent</div> 
      <div className="badge badge-ghost">ghost</div>
    </div>
  );
}

export default Badge;