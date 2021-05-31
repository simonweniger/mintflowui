import React from "react";

function HeroFlex() {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="flex-col hero-content lg:flex-row-reverse">
        <img src="https://picsum.photos/id/1005/600/600" className="max-w-sm rounded-lg shadow-2xl" /> 
        <div className="hero-content-left">
          <h1 className="mb-5 hero">
            Hello there
          </h1> 
          <p className="mb-5 body-large">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
          </p> 
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
    );
}
                
export default HeroFlex;