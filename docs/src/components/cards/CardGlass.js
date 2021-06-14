import React from "react";

function CardGlass() {
  return (
    <div className="flex-wrap space-y-6">
      <div className="flex items-center w-full px-4 py-10 bg-cover card bg-primary">
        <div className="card glass bg-opacity-50 lg:card-side text-base-content">
          <figure className="p-6">
            <img src="https://picsum.photos/id/1005/300/200" className="rounded-lg shadow-lg"/>
          </figure> 
          <div className="max-w-md card-body-centerd">
            <h2 className="card-title">glass bg-base-100 opacity-40</h2> 
            <p>Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente.</p> 
            <div className="card-actions">
              <button className="btn text-base-content glass bg-base-100 opacity-40 rounded-full">Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
}
                
export default CardGlass;