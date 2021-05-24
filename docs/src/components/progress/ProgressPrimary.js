import React from "react";

function ProgressPrimary() {
  return (
    <div class="p-6 space-y-2 artboard phone">
      <progress class="progress progress-primary" value="0" max="100"></progress> 
      <progress class="progress progress-primary" value="10" max="100"></progress> 
      <progress class="progress progress-primary" value="40" max="100"></progress> 
      <progress class="progress progress-primary" value="70" max="100"></progress> 
      <progress class="progress progress-primary" value="100" max="100"></progress>
    </div>
    );
}
                
export default ProgressPrimary;