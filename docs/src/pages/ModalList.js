import React from "react";
import Modal from "../components/modals/Modal";

function ModalList() {
  return (
        <div className="overflow-auto h-screen pb-44 pt-2 pr-2 pl-2 md:pt-0 md:pr-0 md:pl-0">
                <div className="w-full space-y-10">
                    <div className="mb-4 bg-base-100 p-6 rounded-xl">
                        <h1>Cards</h1>
                        <Modal />                                   
                    </div>
                </div>
        </div>
    );
}
                
export default ModalList;