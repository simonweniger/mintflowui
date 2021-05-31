import React from "react";

function ButtonHTMLTags() {
  return (
      <div className="space-x-10">
        <a href="#" role="button" className="btn">Link</a> 
        <button type="submit" className="btn">Button</button> 
        <input type="button" value="Input" className="btn"/> 
        <input type="submit" value="Submit" className="btn"/> 
        <input type="reset" value="Reset" className="btn"/>
      </div>
    );
}
                
export default ButtonHTMLTags;