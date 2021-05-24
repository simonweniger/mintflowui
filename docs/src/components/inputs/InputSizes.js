import React from "react";

function InputSizes() {
  return (
    <div className="flex-wrap space-y-4">
      <div class="form-control">
        <label class="label">
          <span class="label-text">Large</span>
        </label> 
        <input type="text" placeholder="username" class="input input-lg input-bordered" />
      </div> 
      <div class="form-control">
        <label class="label">
          <span class="label-text">Normal</span>
        </label> 
        <input type="text" placeholder="username" class="input input-bordered" />
      </div> 
      <div class="form-control">
        <label class="label">
          <span class="label-text">Small</span>
        </label> 
        <input type="text" placeholder="username" class="input input-sm input-bordered" />
      </div> 
      <div class="form-control">
        <label class="label">
          <span class="label-text">Tiny</span>
        </label> 
        <input type="text" placeholder="username" class="input input-xs input-bordered" />
      </div>
    </div>
    );
}
                
export default InputSizes;