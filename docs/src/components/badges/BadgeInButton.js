import React from "react";

function BadgeInButton() {
  return (
    <div>
      <button className="btn">
      Version 2.7.0
        <div className="badge ml-2">new</div>
      </button> 
      <button className="btn btn-primary">
            Inbox
        <div className="badge ml-2 badge-outline">3</div>
      </button> 
      <button className="btn btn-secondary btn-outline">
            Notifications
        <div className="badge ml-2 badge-outline">+999</div>
      </button> 
      <button className="btn btn-accent">
            accent
        <div className="badge ml-2 badge-outline">new</div>
      </button>
    </div>
  );
}

export default BadgeInButton;