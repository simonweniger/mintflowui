import React from "react";

function DividerVerticalNoText() {
  return (
    <div class="flex flex-row w-full">
      <div class="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">content</div> 
        <div class="divider divider-vertical"></div> 
      <div class="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">content</div>
    </div>
    );
}
                
export default DividerVerticalNoText;