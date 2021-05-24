import React from "react";
import Modal from "../components/modals/Modal";
import ModalNoURL from "../components/modals/ModalNoURL";

function ModalList() {
  return (
        <div className="overflow-auto h-screen pb-24 pt-2 pr-2 pl-2 md:pt-0 md:pr-0 md:pl-0">
                <div className="w-full">
                    <div className="mb-4">
                        <h1>Cards</h1>
                        <Modal />                                   
                    </div>
                    <div className="mb-4">
                        <h1>Cards</h1>
                        <ModalNoURL />                                   
                    </div>
                </div>
        </div>
    );
}
                
export default ModalList;