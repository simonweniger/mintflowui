import React from "react";
import Input from "../components/inputs/Input";
import InputBrandColors from "../components/inputs/InputBrandColors";
import InputButton from "../components/inputs/InputButton";
import InputDisabled from "../components/inputs/InputDisabled";
import InputGhost from "../components/inputs/InputGhost";
import InputHelper from "../components/inputs/InputHelper";
import InputHighlited from "../components/inputs/InputHighlited";
import InputNoBorder from "../components/inputs/InputNoBorder";
import InputSizes from "../components/inputs/InputSizes";
import InputStates from "../components/inputs/InputStates";

function InputList() {
  return (
        <div className="overflow-auto h-screen pb-44 pt-2 pr-2 pl-2 md:pt-0 md:pr-0 md:pl-0">
                <div className="w-full space-y-10">
                    <div className="mb-4 bg-base-100 p-6 rounded-xl">
                        <h1>Input</h1>
                        <Input />                                   
                    </div>
                    <div className="mb-4 bg-base-100 p-6 rounded-xl">
                        <h1>Input InputHighlited</h1>
                        <InputHighlited />                                   
                    </div>
                    <div className="mb-4 bg-base-100 p-6 rounded-xl">
                        <h1>Input without border</h1>
                        <InputNoBorder />                                   
                    </div>
                    <div className="mb-4 bg-base-100 p-6 rounded-xl">
                        <h1>Input Ghost</h1>
                        <InputGhost />                                   
                    </div>
                    <div className="mb-4 bg-base-100 p-6 rounded-xl">
                        <h1>Input Disabled</h1>
                        <InputDisabled />                                   
                    </div>
                    <div className="mb-4 bg-base-100 p-6 rounded-xl">
                        <h1>Input Brand Colors</h1>
                        <InputBrandColors />                                   
                    </div>
                    <div className="mb-4 bg-base-100 p-6 rounded-xl">
                        <h1>Input States</h1>
                        <InputStates />                                   
                    </div>
                    <div className="mb-4 bg-base-100 p-6 rounded-xl">
                        <h1>Input Helper</h1>
                        <InputHelper />                                   
                    </div>
                    <div className="mb-4 bg-base-100 p-6 rounded-xl">
                        <h1>Input Sizes</h1>
                        <InputSizes />                                   
                    </div>
                    <div className="mb-4 bg-base-100 p-6 rounded-xl">
                        <h1>Input Button</h1>
                        <InputButton />                                   
                    </div>
                </div>
        </div>
    );
}
                
export default InputList;