import React from "react";

function Card() {
  return (
    <div className="flex space-x-6">
      <div className="card bordered">
        <figure>
          <img src="https://picsum.photos/id/1005/400/250" />
        </figure> 
        <div className="card-body">
          <h2 className="card-title">Top image
            <div className="badge mx-2 badge-secondary">NEW</div>
          </h2> 
          <p>Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente.</p> 
          <div className="justify-end card-actions">
            <button className="btn btn-secondary">More info</button>
          </div>
        </div>
      </div> 
      <div className="card bordered">
        <div className="card-body">
          <h2 className="card-title">Image bottom</h2> 
          <p>Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente.</p> 
          <div className="card-actions">
            <button className="btn btn-primary">Login</button> 
            <button className="btn btn-ghost">Register</button>
          </div>
        </div> 
        <figure>
          <img src="https://picsum.photos/id/1005/400/250" />
        </figure>
      </div> 
      <div className="card bordered">
        <figure>
          <img src="https://picsum.photos/id/1005/60/40" className="w-full" />
        </figure> 
        <div className="card-body">
          <h2 className="card-title">Small image file</h2> 
          <p>Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente.</p> 
          <div className="card-actions">
            <div className="badge badge-ghost">Article</div> 
            <div className="badge badge-ghost">Photography</div>
          </div>
        </div>
      </div>
    </div>
    );
}
                
export default Card;