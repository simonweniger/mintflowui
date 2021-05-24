import React from "react";
import Checkbox from "../components/checkboxs/Checkbox";
import CheckboxAccent from "../components/checkboxs/CheckboxAccent";
import CheckboxDisabled from "../components/checkboxs/CheckboxDisabled";
import CheckboxPrimary from "../components/checkboxs/CheckboxPrimary";
import CheckboxSecondary from "../components/checkboxs/CheckboxSecondary";

function CheckboxList() {
  return (
        <div className="overflow-auto h-screen pb-24 pt-2 pr-2 pl-2 md:pt-0 md:pr-0 md:pl-0">
                <div className="w-full">
                    <div className="mb-4">
                        <h1>Cards</h1>
                        <Checkbox />                                   
                    </div>
                    <div className="mb-4">
                        <h1>Cards</h1>
                        <CheckboxPrimary />                                   
                    </div>
                    <div className="mb-4">
                        <h1>Cards</h1>
                        <CheckboxSecondary />                                   
                    </div>
                    <div className="mb-4">
                        <h1>Cards</h1>
                        <CheckboxAccent />                                   
                    </div>
                    <div className="mb-4">
                        <h1>Cards</h1>
                        <CheckboxDisabled />                                   
                    </div>
                </div>
        </div>
    );
}
                
export default CheckboxList;