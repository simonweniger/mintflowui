import React from "react";

function TokenGatedCard() {
  return (
    <div className="flex space-x-4">
      <div className="card bordered">
        <figure className="card-image">
          <img src="https://picsum.photos/id/1005/400/250" className="h-80 object-cover rounded-xl" />
        </figure> 
        <div className="card-body">
          <h2 className="card-title font-heading h6">Title of my NFT</h2> 
            <div class="avatar">
              <div class="rounded-full w-6 h-6">
                <img src="http://daisyui.com/tailwind-css-component-profile-1@94w.png" />
              </div>
              <p className="ml-2 body text-base-content">@username</p>
            </div>
        </div>
      </div>
    </div>
    );
}
                
export default TokenGatedCard;