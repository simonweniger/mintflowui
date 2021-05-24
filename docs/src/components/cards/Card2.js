import React from "react";

function Card() {
  return (
    <div className="flex space-x-6">
      <div className="card text-center shadow-2xl">
        <figure className="px-10 pt-10">
          <img src="https://picsum.photos/id/1005/400/250" className="rounded-xl" />
        </figure> 
        <div className="card-body">
          <h2 className="card-title">shadow, center, padding</h2> 
          <p>Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente.</p> 
          <div className="justify-center card-actions">
            <button className="btn btn-outline btn-accent">More info</button>
          </div>
        </div>
      </div> 
      <div className="card shadow-xl image-full">
        <figure>
          <img src="https://picsum.photos/id/1005/400/250" />
        </figure> 
        <div className="justify-end card-body">
          <h2 className="card-title">Image overlay</h2> 
          <p>Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente.</p> 
          <div className="card-actions">
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div> 
      <div className="card shadow-sm bg-accent text-accent-content">
        <figure>
          <img src="https://picsum.photos/id/1005/400/250" />
        </figure> 
        <div className="card-body">
          <h2 className="card-title">Accent color</h2> 
          <p>Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente.</p> 
          <div className="card-actions">
            <button className="btn btn-secondary">More info</button>
          </div>
        </div>
      </div>
    </div>
    );
}
                
export default Card;