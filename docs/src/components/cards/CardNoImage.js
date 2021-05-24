import React from "react";

function CardNoImage() {
  return (
    <div className="flex space-x-6">
      <div className="card lg:card-side bordered">
        <div className="card-body">
          <h2 className="card-title">No Images</h2> 
          <p>Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente.</p> 
          <div className="card-actions">
            <button className="btn btn-primary">Get Started</button> 
            <button className="btn btn-ghost">More info</button>
          </div>
        </div>
      </div>
    </div>
    );
}
                
export default CardNoImage;