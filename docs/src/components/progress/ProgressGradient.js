import React from "react";

function ProgressGradient() {
  return (
    <div class="p-6 space-y-2 artboard phone">
      <progress class="progress progress-gradient" value="0" max="100"></progress> 
      <progress class="progress progress-gradient" value="10" max="100"></progress> 
      <progress class="progress progress-gradient" value="40" max="100"></progress> 
      <progress class="progress progress-gradient" value="70" max="100"></progress> 
      <progress class="progress progress-gradient" value="100" max="100"></progress>
    </div>
    );
}
                
export default ProgressGradient;