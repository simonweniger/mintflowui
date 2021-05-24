import React from "react";
import Divider from "../components/divider/Divider";
import DividerNoText from "../components/divider/DividerNoText";
import DividerVertical from "../components/divider/DividerVertical";
import DividerVerticalNoText from "../components/divider/DividerVerticalNoText";

function DividerList() {
  return (
        <div className="overflow-auto h-screen pb-24 pt-2 pr-2 pl-2 md:pt-0 md:pr-0 md:pl-0">
                <div className="w-full">
                    <div className="mb-4">
                        <h1>Cards</h1>
                        <Divider />                                   
                    </div>
                    <div className="mb-4">
                        <h1>Cards</h1>
                        <DividerVertical />                                   
                    </div>
                    <div className="mb-4">
                        <h1>Cards</h1>
                        <DividerNoText />                                   
                    </div>
                    <div className="mb-4">
                        <h1>Cards</h1>
                        <DividerVerticalNoText />                                   
                    </div>
                </div>
        </div>
    );
}
                
export default DividerList;