import React from "react";

function ProgressAccent() {
  return (
    <div class="p-6 space-y-2 artboard phone">
      <progress class="progress progress-accent" value="0" max="100"></progress> 
      <progress class="progress progress-accent" value="10" max="100"></progress> 
      <progress class="progress progress-accent" value="40" max="100"></progress> 
      <progress class="progress progress-accent" value="70" max="100"></progress> 
      <progress class="progress progress-accent" value="100" max="100"></progress>
    </div>
    );
}
                
export default ProgressAccent;