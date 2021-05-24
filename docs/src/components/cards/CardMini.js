import React from "react";

function CardMini() {
  return (
    <div className="flex space-x-6">
      <div className="card shadow-2xl lg:card-side bg-primary text-primary-content">
        <div className="card-body">
          <p>Rerum reiciendis beatae tenetur excepturi aut pariatur est eos.</p> 
          <div className="justify-end card-actions">
            <button className="btn btn-primary">
                  More info
                  
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 ml-2 stroke-current"> 
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>
        </div>
      </div> 
      <div className="card shadow-2xl lg:card-side bg-secondary text-secondary-content">
        <div className="card-body">
          <div className="justify-end card-actions">
            <button className="btn btn-secondary btn-square">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div> 
          <p>Rerum reiciendis beatae tenetur excepturi aut pariatur est eos.</p>
        </div>
      </div> 
      <div className="card text-center shadow-2xl lg:card-side bg-accent text-accent-content">
        <div className="card-body">
          <p>Rerum reiciendis beatae tenetur excepturi aut pariatur est eos.</p> 
          <div className="justify-center card-actions">
            <button className="btn btn-accent">Start now</button> 
            <button className="btn btn-accent">More info</button>
          </div>
        </div>
      </div>
    </div>
    );
}
                
export default CardMini;