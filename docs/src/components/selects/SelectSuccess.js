import React from "react";

function SelectSuccess() {
  return (
    <select class="select select-bordered select-success w-full max-w-xs">
      <option disabled="disabled" selected="selected">Choose your superpower</option> 
      <option>telekinesis</option> 
      <option>time travel</option> 
      <option>invisibility</option>
    </select>
    );
}
                
export default SelectSuccess;