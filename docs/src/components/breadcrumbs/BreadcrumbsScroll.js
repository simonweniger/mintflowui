import React from "react";

function BreadcrumbsScroll() {
  return (
    <div className="max-w-xs text-sm breadcrumbs">
      <ul>
        <li>If you set max-width</li> 
        <li>or the list</li> 
        <li>gets larger than</li> 
        <li>the container</li> 
        <li>it will scroll</li>
      </ul>
    </div>
  );
}

export default BreadcrumbsScroll;