import React from "react";

function Textarea() {
  return (
    <div class="form-control">
      <label class="label">
        <span class="label-text">Your bio</span>
      </label> 
      <textarea class="textarea h-24 textarea textarea-bordered" placeholder="Bio"></textarea>
    </div>
    );
}
                
export default Textarea;