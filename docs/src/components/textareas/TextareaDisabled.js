import React from "react";

function TextareaDisabled() {
  return (
    <div class="form-control">
      <label class="label">
        <span class="label-text">Disabled</span>
      </label> 
      <textarea class="textarea h-24 textarea textarea-bordered" placeholder="Disabled" disabled="disabled"></textarea>
    </div>
    );
}
                
export default TextareaDisabled;