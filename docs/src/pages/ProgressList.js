import React from "react";
import Progress from "../components/progress/Progress";
import ProgressAccent from "../components/progress/ProgressAccent";
import ProgressError from "../components/progress/ProgressError";
import ProgressInfo from "../components/progress/ProgressInfo";
import ProgressPrimary from "../components/progress/ProgressPrimary";
import ProgressSecondary from "../components/progress/ProgressSecondary";
import ProgressSuccess from "../components/progress/ProgressSuccess";
import ProgressWarning from "../components/progress/ProgressWarning";

function ProgressList() {
  return (
        <div className="overflow-auto h-screen pb-24 pt-2 pr-2 pl-2 md:pt-0 md:pr-0 md:pl-0">
                <div className="w-full space-y-10">
                    <div className="mb-4 bg-base-100 p-6 rounded-xl">
                        <h1>Cards</h1>
                        <Progress />                                   
                    </div>
                    <div className="mb-4 bg-base-100 p-6 rounded-xl">
                        <h1>Cards</h1>
                        <ProgressAccent />                                   
                    </div>
                    <div className="mb-4 bg-base-100 p-6 rounded-xl">
                        <h1>Cards</h1>
                        <ProgressError />                                   
                    </div>
                    <div className="mb-4 bg-base-100 p-6 rounded-xl">
                        <h1>Cards</h1>
                        <ProgressInfo />                                   
                    </div>
                    <div className="mb-4 bg-base-100 p-6 rounded-xl">
                        <h1>Cards</h1>
                        <ProgressPrimary />                                   
                    </div>
                    <div className="mb-4 bg-base-100 p-6 rounded-xl">
                        <h1>Cards</h1>
                        <ProgressSecondary />                                   
                    </div>
                    <div className="mb-4 bg-base-100 p-6 rounded-xl">
                        <h1>Cards</h1>
                        <ProgressSuccess />                                   
                    </div>
                    <div className="mb-4 bg-base-100 p-6 rounded-xl">
                        <h1>Cards</h1>
                        <ProgressWarning />                                   
                    </div>
                </div>
        </div>
    );
}
                
export default ProgressList;