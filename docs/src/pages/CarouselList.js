import React from "react";
import NFT from "../components/cards/NFT";
import Carousel from "../components/carousels/Carousel";
import CarouselCenter from "../components/carousels/CarouselCenter";
import CarouselEnd from "../components/carousels/CarouselEnd";
import CarouselFilm from "../components/carousels/CarouselFilm";
import CarouselFullWidth from "../components/carousels/CarouselFullWidth";
import CarouselHalfWidth from "../components/carousels/CarouselHalfWidth";
import CarouselVertical from "../components/carousels/CarouselVertical";

function CarouselList() {
  return (
        <div className="overflow-auto h-screen pb-44 pt-2 pr-2 pl-2 md:pt-0 md:pr-0 md:pl-0">
                <div className="w-full space-y-10">
                    <div className="mb-4 p-6 rounded-xl">
                        <h1>Carousel</h1> 
                        <Carousel />                                   
                    </div>
                    <div className="mb-4 p-6 rounded-xl">
                        <h1>Carousel</h1> 
                        <CarouselCenter />                                   
                    </div>
                    <div className="mb-4 p-6 rounded-xl">
                        <h1>Carousel</h1> 
                        <CarouselEnd />                                   
                    </div>
                    <div className="mb-4 p-6 rounded-xl">
                        <h1>Carousel</h1> 
                        <CarouselVertical />                                   
                    </div>
                    <div className="mb-4 p-6 rounded-xl">
                        <h1>Carousel</h1> 
                        <CarouselFilm />                                   
                    </div>
                    <div className="mb-4 p-6 rounded-xl">
                        <h1>Carousel</h1> 
                        <CarouselFullWidth />                                   
                    </div>
                    <div className="mb-4 p-6 rounded-xl">
                        <h1>Carousel</h1> 
                        <CarouselHalfWidth />                                   
                    </div>

                </div>
        </div>
    );
}
                
export default CarouselList;