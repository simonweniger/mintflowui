import React from "react";

function ButtonGroup() {
  return (
    <div className="flex-wrap space-y-6">
      <div className="btn-group">
        <button className="btn btn-lg btn-active">Large</button> 
        <button className="btn btn-lg">Large</button> 
        <button className="btn btn-lg">Large</button> 
        <button className="btn btn-lg">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-4 stroke-current">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path>
          </svg>
        </button>
      </div> 
      <div className="btn-group">
        <button className="btn btn-active">Normal</button> 
        <button className="btn">Normal</button> 
        <button className="btn">Normal</button> 
        <button className="btn">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-4 stroke-current">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path>
          </svg>
        </button>
      </div> 
      <div className="btn-group">
        <button className="btn btn-sm btn-active">Small</button> 
        <button className="btn btn-sm">Small</button> 
        <button className="btn btn-sm">Small</button> 
        <button className="btn btn-sm">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-4 stroke-current"> 
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path>
          </svg>
        </button>
      </div> 
      <div className="btn-group">
        <button className="btn btn-xs btn-active">Tiny</button> 
        <button className="btn btn-xs">Tiny</button> 
        <button className="btn btn-xs">Tiny</button> 
        <button className="btn btn-xs">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-4 stroke-current">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path>
          </svg>
        </button>
      </div>
    </div>
    );
}
                
export default ButtonGroup;