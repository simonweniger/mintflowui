import React from "react";
import AvatarCircle from "../components/avatars/AvatarCircle";
import AvatarCricleBordered from "../components/avatars/AvatarCricleBordered";
import AvatarMasked from "../components/avatars/AvatarMask";
import AvatarCircleIndicator from "../components/avatars/AvatarCircleIndicator";
import AvatarSquare from "../components/avatars/AvatarSquare";
import AvatarSquareBordered from "../components/avatars/AvatarSquareBordered";
import AvatarSquareIndicator from "../components/avatars/AvatarSquareIndicator";

function AvatarList() {
  return (
        <div className="overflow-auto h-screen pb-44 pt-2 pr-2 pl-2 md:pt-0 md:pr-0 md:pl-0">
                <div className="w-full space-y-10">
                    <div className="mb-4 bg-base-100 p-6 rounded-xl">
                        <h1>Avatar Square</h1>
                        <AvatarSquare />                                   
                    </div>
                    <div className="mb-4 bg-base-100 p-6 rounded-xl">
                        <h1>Avatar Circle</h1>
                        <AvatarCircle />                                   
                    </div>
                    <div className="mb-4 bg-base-100 p-6 rounded-xl">
                        <h1>Avatar</h1>
                        <AvatarMasked />                                   
                    </div>
                    <div className="mb-4 bg-base-100 p-6 rounded-xl">
                        <h1>Avatar</h1>
                        <AvatarSquareBordered />                                   
                    </div>
                    <div className="mb-4 bg-base-100 p-6 rounded-xl">
                        <h1>Avatar</h1>
                        <AvatarCricleBordered />                                   
                    </div>
                    <div className="mb-4 bg-base-100 p-6 rounded-xl">
                        <h1>Avatar</h1>
                        <AvatarSquareIndicator />                                   
                    </div>
                    <div className="mb-4 bg-base-100 p-6 rounded-xl">
                        <h1>Avatar</h1>
                        <AvatarCircleIndicator />                                   
                    </div>  
            </div>
        </div>
    );
}
                
export default AvatarList;