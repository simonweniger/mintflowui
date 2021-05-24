import React from "react";
import ToggleAccent from "../components/toggels/ToggleAccent";
import ToggleDisabled from "../components/toggels/ToggleDisabled";
import TogglePrimary from "../components/toggels/TogglePrimary";
import ToggleSecondary from "../components/toggels/ToggleSecondary";

function ToggleList() {
  return (
        <div className="overflow-auto h-screen pb-44 pt-2 pr-2 pl-2 md:pt-0 md:pr-0 md:pl-0">
                <div className="w-full space-y-10">
                    <div className="mb-4 bg-base-100 p-6 rounded-xl">
                        <h1>Cards</h1>
                        <TogglePrimary />                                   
                    </div>
                    <div className="mb-4 bg-base-100 p-6 rounded-xl">
                        <h1>Cards</h1>
                        <ToggleSecondary />                                   
                    </div>
                    <div className="mb-4 bg-base-100 p-6 rounded-xl">
                        <h1>Cards</h1>
                        <ToggleAccent />                                   
                    </div>
                    <div className="mb-4 bg-base-100 p-6 rounded-xl">
                        <h1>Cards</h1>
                        <ToggleDisabled />                                   
                    </div>
                </div>
        </div>
    );
}
                
export default ToggleList;