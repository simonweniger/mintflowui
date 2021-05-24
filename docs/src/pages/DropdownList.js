import React from "react";
import Dropdown from "../components/dropdowns/Dropdown";
import DropdownEnd from "../components/dropdowns/DropdownEnd";
import DropdownHelper from "../components/dropdowns/DropdownHelper";
import DropdownHover from "../components/dropdowns/DropdownHover";
import DropdownLeft from "../components/dropdowns/DropdownLeft";
import DropdownLeftEnd from "../components/dropdowns/DropdownLeftEnd";
import DropdownOpen from "../components/dropdowns/DropdownOpen";
import DropdownRight from "../components/dropdowns/DropdownRight";
import DropdownRightEnd from "../components/dropdowns/DropdownRightEnd";
import DropdownTop from "../components/dropdowns/DropdownTop";
import DropdownTopEnd from "../components/dropdowns/DropdownTopEnd";

function NavList() {
  return (
        <div className="overflow-auto h-screen pb-24 pt-2 pr-2 pl-2 md:pt-0 md:pr-0 md:pl-0">
                <div className="w-full">
                    <div className="mb-4">
                        <h1>Cards</h1>
                        <Dropdown />                                   
                    </div>
                    <div className="mb-4">
                        <h1>Cards</h1>
                        <DropdownEnd />                                   
                    </div>
                    <div className="mb-4">
                        <h1>Cards</h1>
                        <DropdownLeft />                                   
                    </div>
                    <div className="mb-4">
                        <h1>Cards</h1>
                        <DropdownLeftEnd />                                   
                    </div>
                    <div className="mb-4">
                        <h1>Cards</h1>
                        <DropdownRight />                                   
                    </div>
                    <div className="mb-4">
                        <h1>Cards</h1>
                        <DropdownRightEnd />                                   
                    </div>
                    <div className="mb-4">
                        <h1>Cards</h1>
                        <DropdownTop />                                   
                    </div>
                    <div className="mb-4">
                        <h1>Cards</h1>
                        <DropdownTopEnd />                                   
                    </div>
                    <div className="mb-4">
                        <h1>Cards</h1>
                        <DropdownOpen />                                   
                    </div>
                    <div className="mb-4">
                        <h1>Cards</h1>
                        <DropdownHover />                                   
                    </div>
                    <div className="mb-4">
                        <h1>Cards</h1>
                        <DropdownHelper />                                   
                    </div>
                </div>
        </div>
    );
}
                
export default NavList;