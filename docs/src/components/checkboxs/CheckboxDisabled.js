import React from "react";

function CheckboxDisabled() {
  return (
    <div class="p-6 card bordered">
      <div class="form-control">
        <label class="label">
          <span class="label-text">Disabled + unchecked</span> 
          <input type="checkbox" disabled="disabled" class="checkbox" /> 
          <span class="checkbox-mark"></span>
        </label>
      </div> 
      <div class="form-control">
        <label class="label">
          <span class="label-text">Disabled + checked</span> 
          <input type="checkbox" checked="checked" disabled="disabled" class="checkbox" /> 
          <span class="checkbox-mark"></span>
        </label>
      </div>
    </div>
    );
}
                
export default CheckboxDisabled;