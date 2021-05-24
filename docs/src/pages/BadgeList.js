import React from "react";
import Badge from "../components/badges/Badge";
import BadgeInButton from "../components/badges/BadgeInButton";
import BadgeInText from "../components/badges/BadgeInText";
import BadgeOutline from "../components/badges/BadgeOutline";
import BadgeSize from "../components/badges/BadgeSize";
import BadgeVariants from "../components/badges/BadgeVariants";

function BadgeList() {
  return (
        <div className="overflow-auto h-screen pb-24 pt-2 pr-2 pl-2 md:pt-0 md:pr-0 md:pl-0">
                <div className="w-full">
                    <div className="mb-4">
                        <h1>Alert</h1>
                        <Badge />                                   
                    </div>
                    <div className="mb-4">
                        <h1>Alert</h1>
                        <BadgeSize />                                   
                    </div>
                    <div className="mb-4">
                        <h1>Alert</h1>
                        <BadgeVariants />
                    </div>
                    <div className="mb-4">
                        <h1>Alert</h1>
                        <BadgeOutline />                                   
                    </div>
                    <div className="mb-4">
                        <h1>Alert</h1>
                        <BadgeInText />                                   
                    </div>
                    <div className="mb-4">
                        <h1>Alert</h1>
                        <BadgeInButton />                                   
                    </div>
                </div>
        </div>
    );
}
                
export default BadgeList;