import React from "react";

function DividerVertical() {
  return (
    <div class="flex flex-row w-full">
      <div class="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">content</div> 
        <div class="divider divider-vertical">OR</div> 
      <div class="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">content</div>
    </div>
    );
}
                
export default DividerVertical;