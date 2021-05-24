import React from "react";

function InputStates() {
  return (
    <div className="flex-wrap space-y-4">
      <div class="form-control">
        <label class="label">
          <span class="label-text">Username</span>
        </label> 
        <input type="text" placeholder="username" class="input input-info input-bordered" /> 
        <label class="label">
          <span class="label-text-alt">Please enter data</span>
        </label>
      </div> 
      <div class="form-control">
        <label class="label">
          <span class="label-text">Username</span>
        </label> 
        <input type="text" placeholder="username" class="input input-success input-bordered" /> 
        <label class="label">
          <span class="label-text-alt">Data is valid</span>
        </label>
      </div> 
      <div class="form-control">
        <label class="label">
          <span class="label-text">Username</span>
        </label> 
        <input type="text" placeholder="username" class="input input-warning input-bordered" /> 
        <label class="label">
          <span class="label-text-alt">Data must be more than 3 characters</span>
        </label>
      </div> 
      <div class="form-control">
        <label class="label">
          <span class="label-text">Username</span>
        </label> 
        <input type="text" placeholder="username" class="input input-error input-bordered" /> 
        <label class="label">
          <span class="label-text-alt">Data is incorrect</span>
        </label>
      </div>
    </div>
    );
}
                
export default InputStates;