import React from "react";

function InputNoBorder() {
  return (
    <div class="p-10 card bg-base-200">
      <div class="form-control">
        <label class="label">
          <span class="label-text">Username</span>
        </label> 
        <input type="text" placeholder="username" class="input" />
      </div>
    </div>
    );
}
                
export default InputNoBorder;