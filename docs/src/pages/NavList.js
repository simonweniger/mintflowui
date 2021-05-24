import React from "react";
import Navigation from "../components/navigations/Navigation";
import NavigationDropdown from "../components/navigations/NavigationDropdown";

function NavList() {
  return (
        <div className="overflow-auto h-screen pb-24 pt-2 pr-2 pl-2 md:pt-0 md:pr-0 md:pl-0">
                <div className="w-full">
                    <div className="mb-4">
                        <h1>Cards</h1>
                        <Navigation />                                   
                    </div>
                    <div className="mb-4">
                        <h1>Cards</h1>
                        <NavigationDropdown />                                   
                    </div>
                </div>
        </div>
    );
}
                
export default NavList;