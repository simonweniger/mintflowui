import React from "react";

function Card() {
  return (
    <div className="flex space-x-6">
      <div className="card bordered">
        <figure>
          <img src="https://source.unsplash.com/random/380x250" />
        </figure> 
        <div className="card-body">
          <h2 className="card-title">Top image
            <div className="badge mx-2 badge-secondary">123 TKN</div>
          </h2> 
          <p>Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente.</p> 
          <div className="justify-end card-actions">
            <button className="btn btn-secondary">More info</button>
          </div>
        </div>
      </div> 

      <div className="card bordered w-full">
        <figure>
          <img class="object-cover h-full card-image-padding" src="https://source.unsplash.com/random/300x360"/>
            <div class="inline-flex items-center justify-center px-4 absolute bottom-44">
              <p class="btn btn-gradient w-1/3 text-primary-content buttontext-small">Manage</p>
            </div>
        </figure>
        <div class="card-body">
                        <div class="card-title">
                            <h2 class="font-heading font-semibold title">Massive Dynamic</h2>
                            <p class="font-body font-normal bodytext">Rerum reiciendis beatae tenetur excepturi aut pariatur est eos.</p>
                        </div>
                          <div class="card-details pt-2 space-x-2">
                            <div class="badge badge-ghost py-1">
                              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                              </svg>
                              <p class="pl-2 caption">Near Chain</p>
                            </div>
                            <div class="badge badge-ghost py-1">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                                <p class="pl-2 caption">213</p>
                            </div>
                          </div>
                    </div>
      </div>
              <div className="card bordered w-full">
                <figure>
                  <img class="object-cover h-full card-image-padding" src="https://source.unsplash.com/random/300x360"/>
                </figure>
                <div class="card-body">
                        <div class="card-title">
                            <h2 class="font-heading font-semibold title">Massive Dynamic</h2>
                            <p class="font-body font-normal bodytext">Rerum reiciendis beatae tenetur excepturi aut pariatur est eos.</p>
                        </div>
                          <div class="card-details pt-2 space-x-2">
                            <div class="badge badge-ghost py-1">
                              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                              </svg>
                              <p class="pl-2 caption">Near Chain</p>
                            </div>
                            <div class="badge badge-ghost py-1">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                                <p class="pl-2 caption">213</p>
                            </div>
                          </div>
                    </div>
      </div>
    </div>
    );
}
                
export default Card;