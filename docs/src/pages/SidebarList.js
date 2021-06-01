import React from "react";
import Sidebar from "../components/sidebar/Sidebar";
import SidebarHeader from "../components/sidebar/SidebarHeader";

function SidebarList() {
  return (
        <div className="overflow-auto h-screen pb-44 pt-2 pr-2 pl-2 md:pt-0 md:pr-0 md:pl-0">
                <div className="w-full space-y-10">
                    <div className="mb-4  p-6 rounded-xl">
                        <h1>Cards</h1>
                        <Sidebar />                                   
                    </div>
                    <div className="mb-4 p-6 rounded-xl">
                        <h1>Cards</h1>
                        <SidebarHeader />                                   
                    </div>
                </div>
        </div>
    );
}
                
export default SidebarList;