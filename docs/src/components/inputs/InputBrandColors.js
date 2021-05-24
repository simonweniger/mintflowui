import React from "react";

function InputBrandColors() {
  return (
    <div className="flex-wrap space-y-4">
      <div class="form-control">
        <label class="label">
          <span class="label-text">Primary</span>
        </label> 
        <input type="text" placeholder="username" class="input input-primary input-bordered" />
      </div> 
      <div class="form-control">
        <label class="label">
          <span class="label-text">Secondary</span>
        </label> 
        <input type="text" placeholder="username" class="input input-secondary input-bordered" />
      </div> 
      <div class="form-control">
        <label class="label">
          <span class="label-text">Accent</span>
        </label> 
        <input type="text" placeholder="username" class="input input-accent input-bordered" />
      </div>
    </div>
    );
}
                
export default InputBrandColors;