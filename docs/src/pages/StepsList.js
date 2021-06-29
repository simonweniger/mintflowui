import React from "react";
import Steps from "../components/steps/Steps";
import StepsData from "../components/steps/StepsData";
import StepsScroll from "../components/steps/StepsScroll";
import StepsVertical from "../components/steps/StepsVertical";

function StepsList() {
    return (
        <div className="overflow-auto h-screen pb-44 pt-2 pr-2 pl-2 md:pt-0 md:pr-0 md:pl-0">
            <div className="w-full space-y-10">
                <div className="mb-4 p-6 rounded-xl">
                    <h1>Steps</h1>
                    <Steps />                                   
                </div>
                <div className="mb-4 p-6 rounded-xl">
                    <h1>Steps with Data</h1>
                    <StepsData/>                                   
                </div>
                <div className="mb-4 p-6 rounded-xl">
                    <h1>Steps Scroll</h1>
                    <StepsScroll />                                   
                </div>
                <div className="mb-4 p-6 rounded-xl">
                    <h1>Steps Vertical</h1>
                    <StepsVertical />                                   
                </div>
            </div>
        </div>
    );
}
                                
export default StepsList;