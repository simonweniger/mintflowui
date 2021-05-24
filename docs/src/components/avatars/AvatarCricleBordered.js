import React from "react";

function AvatarCricleBordered() {
  return (
    <div>
      <div className="avatar">
        <div className="mb-8 rounded-full w-32 h-32 ring ring-primary ring-offset-base-100 ring-offset-2">
          <img src="https://i.pravatar.cc/500?img=32"/>
        </div>
      </div> 
      <div className="avatar">
        <div className="mb-8 rounded-full w-24 h-24 ring ring-primary ring-offset-base-100 ring-offset-2">
          <img src="https://i.pravatar.cc/500?img=32"/>
        </div>
      </div> 
      <div className="avatar">
        <div className="mb-8 rounded-full w-16 h-16 ring ring-primary ring-offset-base-100 ring-offset-2">
          <img src="https://i.pravatar.cc/500?img=32"/>
        </div>
      </div> 
      <div className="avatar">
        <div className="mb-8 rounded-full w-10 h-10 ring ring-primary ring-offset-base-100 ring-offset-2">
          <img src="https://i.pravatar.cc/500?img=32"/>
        </div>
      </div>
    </div>
  );
}

export default AvatarCricleBordered;