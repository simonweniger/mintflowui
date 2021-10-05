import React from "react";

function Swatch() {
  return (
    <div className="swatch">
    <input type="color" name="color"  />
    <div className="swatch-info">
        <h1 className="swatch-title">Input</h1>
        <h2 className="swatch-description">Color</h2>
    </div>
    </div>
    );
}
                
export default Swatch;