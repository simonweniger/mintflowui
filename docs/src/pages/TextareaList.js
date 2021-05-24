import React from "react";
import Textarea from "../components/textareas/Textarea";
import TextareaDisabled from "../components/textareas/TextareaDisabled";
import TextareaGhost from "../components/textareas/TextareaGhost";
import TextareaNoBorder from "../components/textareas/TextareaNoBorder";

function TextareaList() {
  return (
        <div className="overflow-auto h-screen pb-44 pt-2 pr-2 pl-2 md:pt-0 md:pr-0 md:pl-0">
                <div className="w-full space-y-10">
                    <div className="mb-4 bg-base-100 p-6 rounded-xl">
                        <h1>Cards</h1>
                        <Textarea />                                   
                    </div>
                    <div className="mb-4 bg-base-100 p-6 rounded-xl">
                        <h1>Cards</h1>
                        <TextareaNoBorder />                                   
                    </div>
                    <div className="mb-4 bg-base-100 p-6 rounded-xl">
                        <h1>Cards</h1>
                        <TextareaGhost />                                   
                    </div>
                    <div className="mb-4 bg-base-100 p-6 rounded-xl">
                        <h1>Cards</h1>
                        <TextareaDisabled />                                   
                    </div>
                </div>
        </div>
    );
}
                
export default TextareaList;