import React from "react";

function Progress() {
  return (
    <div class="p-6 space-y-2 artboard phone">
      <progress class="progress" value="0" max="100"></progress> 
      <progress class="progress" value="10" max="100"></progress> 
      <progress class="progress" value="40" max="100"></progress> 
      <progress class="progress" value="70" max="100"></progress> 
      <progress class="progress" value="100" max="100"></progress>
    </div>
    );
}
                
export default Progress;