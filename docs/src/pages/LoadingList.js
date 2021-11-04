import React from "react";
import Loading from "../components/loading/Loading";

function LoadingList() {
  return (
        <div className="overflow-auto h-screen pb-24 pt-2 pr-2 pl-2 md:pt-0 md:pr-0 md:pl-0">
                <div className="w-full space-y-10">
                    <div className="mb-4 p-6 rounded-xl">
                        <h1>Loading</h1>
                        <Loading />                                   
                    </div>
                </div>
        </div>
    );
}
                
export default LoadingList;