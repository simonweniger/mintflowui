import React from "react";

function NFT() {
  return (
    <div className="flex space-x-4">
      <div className="card bordered max-w-xs">
        <div className="card-user">
            <div className="avatar">
              <div className="rounded-full w-7 h-7">
                <img src="https://source.unsplash.com/random/300x300" />
              </div>
              <p className="ml-2 body-large text-base-content">@username</p>
            </div>
          </div>
        <figure className="px-4">
          <img src="https://source.unsplash.com/random/300x200" className="object-cover card-image" />
        </figure>  
        <div className="card-body">
          <h2 className="card-title font-heading h6">Title of my NFT</h2> 
          <p className="card-text body-large">Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente.</p> 
          <div className="justify-end card-details">
            <p className="font-body caption-large text-base-300"> Current price</p> 
            <p className="pl-2 h6 font-bold gradient-four">0.80 ETH</p>
          </div>
        </div>
      </div>
      <div className="card bordered">
        <div className="card-user">
            <div class="avatar items-center">
              <div class="rounded-full w-7 h-7">
                <img src="https://source.unsplash.com/random/300x300" />
              </div>
              <p className="body-large ml-2 text-base-content">@username</p>
            </div>
          </div>
        <figure className="px-4">
          <img src="https://source.unsplash.com/random/300x400" className="object-cover card-image" />
        </figure>  
        <div className="card-body">
          <h2 className="card-title font-heading h6">Title of my NFT</h2> 
          <div className="justify-start card-details">
            <p className="font-body caption-large text-base-300"> Current price</p> 
            <p className="pl-2 h6 gradient-four">0.80 ETH</p>
          </div>
        </div>
      </div>
      <div className="card bordered">
        <figure className="card-image">
          <img src="https://source.unsplash.com/random/380x400" className="object-cover card-image" />
        </figure> 
        <div className="card-body">
        <div class="avatar">
              <div class="rounded-full w-6 h-6">
                <img src="https://source.unsplash.com/random/300x300" />
              </div>
              <p className="ml-2 body-large text-base-content">@username</p>
            </div>
          <h2 className="card-title font-heading h6">Title of my NFT</h2> 
          <div className="card-details">
            <p className="font-body caption-large text-base-300"> Current price</p> 
            <p className="pl-2 h6 gradient-four">0.80 ETH</p>
          </div>
        </div>
      </div>
      <div className="card bordered">
        <figure className="card-image-padding">
          <img src="https://source.unsplash.com/random/380x400" className="object-cover card-image" />
        </figure> 
        <div className="card-body">
        <div class="avatar">
              <div class="rounded-full w-6 h-6">
                <img src="https://source.unsplash.com/random/300x300" />
              </div>
              <p className="ml-2 body-large text-base-content">@username</p>
            </div>
          <h2 className="card-title font-heading h6">Title of my NFT</h2> 
          <div className="card-details">
            <p className="font-body caption-large text-base-300"> Current price</p> 
            <p className="pl-2 h6 gradient-four">0.80 ETH</p>
          </div>
        </div>
      </div>
      {/*   <--- This is for later when we support Video/ Music content -->
                <div className="group relative">
                    <img className="w-full md:w-72 block rounded-lg object-cover" src={token.img} alt={token.name} />
                    <div className="absolute bg-black rounded bg-opacity-0 group-hover:bg-opacity-30 w-full h-full top-0 flex items-center group-hover:opacity-100 transition justify-evenly">
                        <button className="hover:scale-110 text-white opacity-0 transform translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 transition">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                                <path d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                            </svg>
                        </button>

                        <button className="hover:scale-110 text-white opacity-0 transform translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 transition">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-play-circle-fill" viewBox="0 0 16 16">
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" />
                            </svg>
                        </button>

                        <button className="hover:scale-110 text-white opacity-0 transform translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 transition">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-three-dots" viewBox="0 0 16 16">
                                <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                            </svg>
                        </button>
                    </div>
                </div>
                */}
    </div>
    );
}
                
export default NFT;