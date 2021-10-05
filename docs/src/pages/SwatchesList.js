import React from "react";
import Swatch from "../components/swatches/Swatch";

function SwatchesList() {
    return (
        <div className="overflow-auto h-screen pb-44 pt-2 pr-2 pl-2 md:pt-0 md:pr-0 md:pl-0">
            <div className="w-full space-y-10">
                <div className="mb-4 p-6 ">
                    <h1>Color Swacth</h1>
                    <Swatch />                                   
                </div>
            </div>
        </div>
    );
}
                                
export default SwatchesList;