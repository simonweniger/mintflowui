import React from "react";

function InputNoBorder() {
  return (
      <div class="form-control">
        <label class="label">
          <span class="label-text">Username</span>
        </label> 
        <input type="text" placeholder="username" class="input" />
      </div>
    );
}
                
export default InputNoBorder;