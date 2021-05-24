import React from "react";

function TextareaNoBorder() {
  return (
    <div class="p-10 card bg-base-200">
      <div class="form-control">
        <label class="label">
          <span class="label-text">Your bio</span>
        </label> 
        <textarea class="textarea h-24 textarea" placeholder="Bio"></textarea>
      </div>
    </div>
    );
}
                
export default TextareaNoBorder;