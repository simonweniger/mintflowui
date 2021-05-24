import React from "react";
import Tab from "../components/tabs/Tab";
import TabBorderd from "../components/tabs/TabBorderd";
import TabBoxed from "../components/tabs/TabBoxed";
import TabLifted from "../components/tabs/TabLifted";
import TabSize from "../components/tabs/TabSize";

function TabList() {
  return (
        <div className="overflow-auto h-screen pb-44 pt-2 pr-2 pl-2 md:pt-0 md:pr-0 md:pl-0">
                <div className="w-full space-y-10">
                    <div className="mb-4 bg-base-100 p-6 rounded-xl">
                        <h1>Cards</h1>
                        <Tab />                                   
                    </div>
                    <div className="mb-4 bg-base-100 p-6 rounded-xl">
                        <h1>Cards</h1>
                        <TabBorderd />                                   
                    </div>
                    <div className="mb-4 bg-base-100 p-6 rounded-xl">
                        <h1>Cards</h1>
                        <TabBoxed />                                   
                    </div>
                    <div className="mb-4 bg-base-100 p-6 rounded-xl">
                        <h1>Cards</h1>
                        <TabLifted />                                   
                    </div>
                    <div className="mb-4 bg-base-100 p-6 rounded-xl">
                        <h1>Cards</h1>
                        <TabSize />                                   
                    </div>
                </div>
        </div>
    );
}
                
export default TabList;