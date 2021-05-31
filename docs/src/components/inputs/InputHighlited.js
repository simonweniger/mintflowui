import React from "react";

function InputHighlited() {
  return (
    <div class="form-control">
        <div className="input input-highlited relative">
          <input 
          type="text" 
          placeholder="Paste the link you want to token gate" className="focus:outline-none body-large" /> 
          <button className="btn btn-primary btn-glow button-small justify-end">Next Step</button>
        </div>
    </div>
  );
}
                
export default InputHighlited;