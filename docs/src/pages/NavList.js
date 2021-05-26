import React from "react";
import Navigation from "../components/navigations/Navigation";
import NavigationApp from "../components/navigations/NavigationApp";
import NavigationAppGlass from "../components/navigations/NavigationAppGlass";
import NavigationCenter from "../components/navigations/NavigationCenter";
import NavigationDropdown from "../components/navigations/NavigationDropdown";
import NavigationIconLeft from "../components/navigations/NavigationIconLeft";
import NavigationIconRight from "../components/navigations/NavigationIconRight";
import NavigationLeft from "../components/navigations/NavigationLeft";
import NavigationRight from "../components/navigations/NavigationRight";

function NavList() {
  return (
        <div className="overflow-auto h-screen pb-44 pt-2 pr-2 pl-2 md:pt-0 md:pr-0 md:pl-0">
                <div className="w-full space-y-10">
                    <div className="mb-4  p-6 rounded-xl">
                        <h1>Cards</h1>
                        <Navigation />                                   
                    </div>
                    <div className="mb-4 p-6 rounded-xl">
                        <h1>Cards</h1>
                        <NavigationDropdown />                                   
                    </div>
                    <div className="mb-4 p-6 rounded-xl">
                        <h1>Cards</h1>
                        <NavigationIconLeft />                                   
                    </div>
                    <div className="mb-4 p-6 rounded-xl">
                        <h1>Cards</h1>
                        <NavigationIconRight />                                   
                    </div>
                    <div className="mb-4 p-6 rounded-xl">
                        <h1>Cards</h1>
                        <NavigationApp />                                   
                    </div>
                    <div className="mb-4 p-6 rounded-xl">
                        <h1>Cards</h1>
                        <NavigationAppGlass />                                   
                    </div>
                    <div className="mb-4 p-6 rounded-xl">
                        <h1>Cards</h1>
                        <NavigationLeft />                                   
                    </div>
                    <div className="mb-4 p-6 rounded-xl">
                        <h1>Cards</h1>
                        <NavigationRight />                                   
                    </div>
                    <div className="mb-4 p-6 rounded-xl">
                        <h1>Cards</h1>
                        <NavigationCenter />                                   
                    </div>
                </div>
        </div>
    );
}
                
export default NavList;