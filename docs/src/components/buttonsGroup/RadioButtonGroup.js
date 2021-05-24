import React from "react";

function RadioButtonGroup() {
  return (
    <div className="flex-wrap space-y-6">
      <div className="btn-group">
        <input type="radio" name="options" id="option1" data-title="1" className="btn" /> 
        <input type="radio" name="options" id="option2" data-title="2" checked="checked" className="btn" /> 
        <input type="radio" name="options" id="option3" data-title="3" className="btn" /> 
        <input type="radio" name="options" id="option4" data-title="4" className="btn" /> 
        <input type="radio" name="options" id="option5" data-title="5" className="btn" />
      </div>
    </div>
    );
}
                
export default RadioButtonGroup;