import React from "react";

function SelectDisabled() {
  return (
    <select class="select select-bordered w-full max-w-xs" disabled="disabled">
      <option disabled="disabled" selected="selected">Choose your superpower</option> 
      <option>telekinesis</option> 
      <option>time travel</option> 
      <option>invisibility</option>
    </select>
    );
}
                
export default SelectDisabled;