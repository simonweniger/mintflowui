import React from "react";

function AvatarMasked() {
  return (
    <div>
      <div className="avatar">
        <div className="mb-8 w-32 h-32 mask mask-squircle">
          <img src="https://i.pravatar.cc/500?img=32" />
        </div>
      </div> 
      <div className="avatar">
        <div className="mb-8 w-32 h-32 mask mask-hexagon">
          <img src="https://i.pravatar.cc/500?img=32" />
        </div>
      </div> 
      <div className="avatar">
        <div className="mb-8 w-32 h-32 mask mask-decagon">
          <img src="https://i.pravatar.cc/500?img=32" />
        </div>
      </div>
    </div>
  );
}

export default AvatarMasked;