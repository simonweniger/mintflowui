import React from "react";
import Card from "../components/cards/Card";
import Card2 from "../components/cards/Card2";
import CardGlass from "../components/cards/CardGlass";
import CardMini from "../components/cards/CardMini";
import CardNoImage from "../components/cards/CardNoImage";
import CardNoImageNoButton from "../components/cards/CardNoImageNoButton";
import CardWide from "../components/cards/CardWide";

function CardList() {
  return (
        <div className="overflow-auto h-screen pb-24 pt-2 pr-2 pl-2 md:pt-0 md:pr-0 md:pl-0">
                <div className="w-full">
                    <div className="mb-4">
                        <h1>Cards</h1>
                        <Card />                                   
                    </div>
                    <div className="mb-4">
                        <h1>Cards</h1>
                        <Card2 />                                   
                    </div>
                    <div className="mb-4">
                        <h1>Cards</h1>
                        <CardWide />                                   
                    </div>
                    <div className="mb-4">
                        <h1>Cards</h1>
                        <CardNoImage />                                   
                    </div>
                    <div className="mb-4">
                        <h1>Cards</h1>
                        <CardNoImageNoButton />                                   
                    </div>
                    <div className="mb-4">
                        <h1>Cards</h1>
                        <CardGlass />                                   
                    </div>
                    <div className="mb-4">
                        <h1>Cards</h1>
                        <CardMini />                                   
                    </div>
                </div>
        </div>
    );
}
                
export default CardList;