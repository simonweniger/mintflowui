import React from "react";

function ProgressSecondary() {
  return (
    <div class="p-6 space-y-2 artboard phone">
      <progress class="progress progress-secondary" value="0" max="100"></progress> 
      <progress class="progress progress-secondary" value="10" max="100"></progress> 
      <progress class="progress progress-secondary" value="40" max="100"></progress> 
      <progress class="progress progress-secondary" value="70" max="100"></progress> 
      <progress class="progress progress-secondary" value="100" max="100"></progress>
    </div>
    );
}
                
export default ProgressSecondary;