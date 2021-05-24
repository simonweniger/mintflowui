import React from "react";

function ToggleDisabled() {
  return (
    <div class="p-6 card bordered">
      <div class="form-control">
        <label class="label">
          <span class="label-text">Unchecked + Disabled</span> 
          <div>
            <input type="checkbox" disabled="disabled" class="toggle" /> 
            <span class="toggle-mark"></span>
          </div>
        </label>
      </div> 
      <div class="form-control">
        <label class="label">
          <span class="label-text">Checked + Disabled</span> 
          <div>
            <input type="checkbox" checked="checked" disabled="disabled" class="toggle" /> 
            <span class="toggle-mark"></span>
          </div>
        </label>
      </div>
    </div>
    );
}
                
export default ToggleDisabled;