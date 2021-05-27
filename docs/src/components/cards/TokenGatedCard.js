import React from "react";

function TokenGatedCard() {
  return (
    <div className="flex space-x-4">
      <div className="card bordered">
        <figure>
          <img class="object-cover h-full card-image" src="https://source.unsplash.com/random/300x360"/>
            <div class="justify-right absolute left-52 top-6">
              <p class="badge badge-ghost caption-bold">🔒 45 TKN</p>
            </div>
            <div class="card-button-overlay-cb">
              <p class="btn btn-gradient w-2/4 text-primary-content button-small">Access</p>
            </div>
        </figure>
        <div className="card-body">
          <h2 className="card-title font-heading h5">Title of my NFT</h2> 
            <div class="avatar">
              <div class="rounded-full w-6 h-6">
                <img src="https://source.unsplash.com/random/300x300" />
              </div>
              <p className="ml-2 body-large text-base-content">@username</p>
        </div>
        </div>
      </div>
    </div>
    );
}
                
export default TokenGatedCard;