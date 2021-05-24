import React from "react";

function TabSize() {
  return (
    <div className="flex-wrap space-y-6">
      <div class="tabs">
        <a class="tab tab-xs tab-lifted">Tiny</a> 
        <a class="tab tab-xs tab-lifted tab-active">Tiny</a> 
        <a class="tab tab-xs tab-lifted">Tiny</a>
      </div> 
      <div class="tabs">
        <a class="tab tab-sm tab-lifted">Small</a> 
        <a class="tab tab-sm tab-lifted tab-active">Small</a> 
        <a class="tab tab-sm tab-lifted">Small</a>
      </div> 
      <div class="tabs">
        <a class="tab tab-lifted">Normal</a> 
        <a class="tab tab-lifted tab-active">Normal</a> 
        <a class="tab tab-lifted">Normal</a>
      </div> 
      <div class="tabs">
        <a class="tab tab-lg tab-lifted">Large</a> 
        <a class="tab tab-lg tab-lifted tab-active">Large</a> 
        <a class="tab tab-lg tab-lifted">Large</a>
      </div>
    </div>
    );
}
                
export default TabSize;