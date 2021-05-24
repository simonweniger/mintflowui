import React from "react";

function SelectSizes() {
  return (
          <div class="pt-2">
            <div class="flex flex-col space-y-6">
              <select class="select select-bordered select-lg w-full max-w-xs">
                <option disabled="disabled" selected="selected">Large</option> 
                <option>telekinesis</option> 
                <option>time travel</option> 
                <option>invisibility</option>
              </select> 
              <select class="select select-bordered w-full max-w-xs">
                <option disabled="disabled" selected="selected">Normal</option> 
                <option>telekinesis</option> 
                <option>time travel</option> 
                <option>invisibility</option>
              </select> 
              <select class="select select-bordered select-sm w-full max-w-xs">
                <option disabled="disabled" selected="selected">Small</option> 
                <option>telekinesis</option> 
                <option>time travel</option> 
                <option>invisibility</option>
              </select> 
              <select class="select select-bordered select-xs w-full max-w-xs">
                <option disabled="disabled" selected="selected">Tiny</option> 
                <option>telekinesis</option> 
                <option>time travel</option> 
                <option>invisibility</option>
              </select>
            </div>
        </div>
    );
}
                
export default SelectSizes;