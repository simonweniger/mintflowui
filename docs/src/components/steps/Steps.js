import React from "react";

function Steps() {
  return (
    <ul class="steps w-full">
      <li class="step step-info">Fly to moon</li> 
      <li class="step step-info">Shrink the moon</li> 
      <li class="step step-info">Grab the moon</li> 
      <li data-content="?" class="step step-error">Sit on toilet</li>
    </ul>
    );
}
                
export default Steps;