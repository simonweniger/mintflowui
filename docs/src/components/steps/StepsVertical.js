import React from "react";

function StepsVertical() {
  return (
    <ul class="steps w-full">
    <li class="step-vertical step-info">Fly to moon</li> 
    <li class="step-vertical step-info">Shrink the moon</li> 
    <li class="step-vertical step-info">Grab the moon</li> 
    <li data-content="?" class="step-vertical step-error">Sit on toilet</li>
  </ul>
    );
}
                
export default StepsVertical;