import React from "react";

function ProgressWarning() {
  return (
    <div class="p-6 space-y-2 artboard phone">
      <progress class="progress progress-warning" value="0" max="100"></progress> 
      <progress class="progress progress-warning" value="10" max="100"></progress> 
      <progress class="progress progress-warning" value="40" max="100"></progress> 
      <progress class="progress progress-warning" value="70" max="100"></progress> 
      <progress class="progress progress-warning" value="100" max="100"></progress>
    </div>
    );
}
                
export default ProgressWarning;