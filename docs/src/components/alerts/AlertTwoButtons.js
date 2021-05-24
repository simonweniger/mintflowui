import React from "react";

function AlertTwoButtons() {
  return (
    <div className="alert">
      <div className="flex-1">
        <label className="mx-3">Lorem ipsum dolor sit amet, consectetur adip!</label>
      </div> 
      <div className="flex-none">
        <button className="btn btn-sm btn-ghost mr-2">Cancel</button> 
        <button className="btn btn-sm btn-primary">Apply</button>
      </div>
    </div>
  );
}

export default AlertTwoButtons;