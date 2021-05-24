import React from "react";
import Menu from "../components/menus/Menue";
import MenuIconsOnly from "../components/menus/MenueIconsOnly";
import MenuVerticalSubmenu from "../components/menus/MenueVerticalSubmenu";
import MenuVertical from "../components/menus/MenuVertical";
import MenuVerticalIconsOnly from "../components/menus/MenuVerticalIconsOnly";
import MenuVerticalPadding from "../components/menus/MenuVerticalPadding";
import MenuVerticalStates from "../components/menus/MenuVerticalStates";

function MenuList() {
  return (
        <div className="overflow-auto h-screen pb-24 pt-2 pr-2 pl-2 md:pt-0 md:pr-0 md:pl-0">
                <div className="w-full">
                    <div className="mb-4">
                        <h1>Cards</h1>
                        <Menu />                                   
                    </div>
                    <div className="mb-4">
                        <h1>Cards</h1>
                        <MenuIconsOnly />                                   
                    </div>
                    <div className="mb-4">
                        <h1>Cards</h1>
                        <MenuVertical />                                   
                    </div>
                    <div className="mb-4">
                        <h1>Cards</h1>
                        <MenuVerticalPadding />                                   
                    </div>
                    <div className="mb-4">
                        <h1>Cards</h1>
                        <MenuVerticalStates />                                   
                    </div>
                    <div className="mb-4">
                        <h1>Cards</h1>
                        <MenuVerticalIconsOnly />                                   
                    </div>
                    <div className="mb-4">
                        <h1>Cards</h1>
                        <MenuVerticalSubmenu />                                   
                    </div>
                </div>
        </div>
    );
}
                
export default MenuList;