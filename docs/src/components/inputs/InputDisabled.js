import React from "react";

function InputDisabled() {
  return (
    <div class="form-control">
      <label class="label">
        <span class="label-text">Disabled input</span>
      </label> 
      <input type="text" placeholder="username" disabled="disabled" class="input input-bordered" />
    </div>
    );
}
                
export default InputDisabled;