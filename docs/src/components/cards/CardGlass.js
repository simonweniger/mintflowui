import React from "react";

function CardGlass() {
  return (
    <div className="flex-wrap space-y-6">
      <div class="flex items-center w-full px-4 py-10 bg-cover card bg-primary">
        <div class="card glass lg:card-side text-neutral-content">
          <figure class="p-6">
            <img src="https://picsum.photos/id/1005/300/200" class="rounded-lg shadow-lg"/>
          </figure> 
          <div class="max-w-md card-body">
            <h2 class="card-title">Glass</h2> 
            <p>Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente.</p> 
            <div class="card-actions">
              <button class="btn glass rounded-full">Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
}
                
export default CardGlass;