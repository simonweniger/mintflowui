import React from "react";

function InputHighlited() {
  return (
    <div class="form-control">
      <label className="label">
        <span className="font-heading font-semibold label-text">Enter Link To Gate</span>
      </label> 
        <div className="input input-highlited relative  ">
          <input 
          type="text" 
          placeholder="Paste the link you want to token gate" className="focus:outline-none body-large" /> 
          <button className="btn btn-primary justify-end">Next</button>
        </div>
    </div>
  );
}
                
export default InputHighlited;