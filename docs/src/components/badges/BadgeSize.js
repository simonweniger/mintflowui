import React from "react";

function BadgeSize() {
  return (
    <div>
      <div className="badge badge-ghost badge-lg">987,654</div> 
      <div className="badge badge-ghost">987,654</div> 
      <div className="badge badge-ghost badge-sm">987,654</div>
    </div>
  );
}

export default BadgeSize;