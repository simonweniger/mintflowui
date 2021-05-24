import React from "react";

function ProgressInfo() {
  return (
    <div class="p-6 space-y-2 artboard phone">
      <progress class="progress progress-info" value="0" max="100"></progress> 
      <progress class="progress progress-info" value="10" max="100"></progress> 
      <progress class="progress progress-info" value="40" max="100"></progress> 
      <progress class="progress progress-info" value="70" max="100"></progress> 
      <progress class="progress progress-info" value="100" max="100"></progress>
    </div>
    );
}
                
export default ProgressInfo;