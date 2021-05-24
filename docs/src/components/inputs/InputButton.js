import React from "react";

function InputButton() {
  return (
    <div className="flex-wrap space-y-6">
      <div class="form-control">
        <label class="label">
          <span class="label-text">connected</span>
        </label> 
        <div class="relative">
          <input type="text" placeholder="Search" class="w-full pr-16 input input-primary input-bordered" /> 
          <button class="absolute right-0 rounded-l-none btn btn-primary">go</button>
        </div>
      </div> 
      <div class="form-control">
        <label class="label">
          <span class="label-text">with space</span>
        </label> 
        <div class="flex space-x-2">
          <input type="text" placeholder="Search" class="w-full input input-primary input-bordered" /> 
          <button class="btn btn-primary">go</button>
        </div>
      </div>
    </div>
    );
}
                
export default InputButton;