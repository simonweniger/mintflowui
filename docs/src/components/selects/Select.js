import React from "react";

function Select() {
  return (
    <select class="select select-bordered w-full max-w-xs">
      <option disabled="disabled" selected="selected">Choose your superpower</option> 
      <option>telekinesis</option> 
      <option>time travel</option> 
      <option>invisibility</option>
    </select>
    );
}
                
export default Select;