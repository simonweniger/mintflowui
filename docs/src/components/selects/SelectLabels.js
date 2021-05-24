import React from "react";

function SelectLabels() {
  return (
    <div className="flex-wrap space-y-6">
      <div class="form-control w-full max-w-xs">
        <label class="label">
          <span class="label-text">Choose your superpower</span> 
          <a href="#" class="label-text-alt">
                Pick wisely
              </a>
        </label> 
        <select class="select select-bordered w-full">
          <option disabled="disabled" selected="selected">Choose your superpower</option> 
          <option>telekinesis</option> 
          <option>time travel</option> 
          <option>invisibility</option>
        </select> 
        <label class="label">
          <a href="#" class="label-text-alt">Cant pick?</a> 
          <a href="#" class="label-text-alt">Need hint?</a>
        </label>
      </div> 
    </div>
    );
}
                
export default SelectLabels;