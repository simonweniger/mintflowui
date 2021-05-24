import React from "react";

function Checkbox() {
  return (
    <div class="p-6 card bordered">
      <div class="form-control">
        <label class="cursor-pointer label">
          <span class="label-text">Remember me</span> 
          <div>
            <input type="checkbox" checked="checked" class="checkbox" /> 
            <span class="checkbox-mark"></span>
          </div>
        </label>
      </div>
    </div>
    );
}
                
export default Checkbox;