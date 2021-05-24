import React from "react";

import Breadcrumbs from "../components/breadcrumbs/Breadcrumbs";
import BreadcrumbsIcons from "../components/breadcrumbs/BreadcrumbsIcons";
import BreadcrumbsScroll from "../components/breadcrumbs/BreadcrumbsScroll";

function BreadcrumbsList() {
  return (
        <div className="overflow-auto h-screen pb-24 pt-2 pr-2 pl-2 md:pt-0 md:pr-0 md:pl-0">
                <div className="w-full">
                    <div className="mb-4">
                        <h1>Alert</h1>
                        <Breadcrumbs />                                   
                    </div>
                    <div className="mb-4">
                        <h1>Alert</h1>
                        <BreadcrumbsIcons />                                   
                    </div>
                    <div className="mb-4">
                        <h1>Alert</h1>
                        <BreadcrumbsScroll />
                    </div>
                </div>
        </div>
    );
}
                
export default BreadcrumbsList;