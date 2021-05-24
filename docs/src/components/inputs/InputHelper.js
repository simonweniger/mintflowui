import React from "react";

function InputHelper() {
  return (
    <div class="form-control">
      <label class="label">
        <span class="label-text">Username</span> 
        <a href="#" class="label-text-alt">
              Need help?
            </a>
      </label> 
      <input type="text" placeholder="username" class="input input-bordered" /> 
      <label class="label">
        <a href="#" class="label-text-alt">Forgot username?</a> 
        <a href="#" class="label-text-alt">Are you sure?</a>
      </label>
    </div>
    );
}
                
export default InputHelper;