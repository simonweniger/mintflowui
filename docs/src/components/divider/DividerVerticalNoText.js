import React from "react";

function DividerVerticalNoText() {
  return (
    <div className="flex flex-row w-full">
      <div className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">content</div> 
        <div className="divider divider-vertical"></div> 
      <div className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">content</div>
    </div>
    );
}
                
export default DividerVerticalNoText;