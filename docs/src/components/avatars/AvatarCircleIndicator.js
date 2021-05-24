import React from "react";

function AvatarCircleIndicator() {
  return (
    <div>
      <div className="avatar offline">
        <div className="rounded-full w-32 h-32">
          <img src="https://i.pravatar.cc/500?img=32" />
        </div>
      </div> 
      <div className="avatar online">
        <div className="rounded-full w-24 h-24">
          <img src="https://i.pravatar.cc/500?img=32" />
        </div>
      </div> 
      <div className="avatar offline">
        <div className="rounded-full w-16 h-16">
          <img src="https://i.pravatar.cc/500?img=32" />
        </div>
      </div> 
      <div className="avatar online">
        <div className="rounded-full w-10 h-10">
          <img src="https://i.pravatar.cc/500?img=32" />
        </div>
      </div>
    </div>
  );
}

export default AvatarCircleIndicator;