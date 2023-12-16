import React from "react";
import computer from "../../assets/computer.jpeg"
import ser from "../../assets/ser.jpeg"

const SecondCard = () => {
  return (
    <div className="min-h-screen w-full p-5 text-center bg-white mx-auto">
      <div className="min-h-screen flex bg-white">
        <div className="p-8 flex justify-between items-center w-full">
          <div className="w-1/2 pr-8">
            <img src={computer} alt="img" className="w-full mb-3 " />
          </div>
          <div className="w-1/2 text-left">
            <h1 className="text-3xl font-medium font-semi bold mb-3 text-purple-600">
              Web & Mobile App Development
            </h1>
            <p className="text-black mb-3">
              Your web and mobile Apps are pieces of the puzzle to grow your business. We use frameworks that tailor content and engagement methods to respond to different intents shown by your potential customers who interact with your business online.
            </p>
            <button className="w-1/ bg-orange-500 text-white font-small px-4 py-2 rounded hover:bg-purple cursor-pointer">
              LEARN MORE
            </button>
          </div>
        </div>
      </div>
      <div className="min-h-screen flex bg-white"> 
        <div className="p-8 flex justify-between items-center w-full"> 
          <div className="w-1/2 text-left p-12"> 
            <h1 className="text-3xl font-medium font-semi bold mb-3 text-purple-600">
              Digital Strategy Consulting
            </h1>
            <p className="text-black mb-3">
              Your digital strategy should complement the overall marketing strategy of the company.
              In online marketing, each component will never work in isolation and every business needs a different mix.
              We provide a clear concept and strategic overview to find the most efficient model for your business.
            </p>
            <button className="w-1/ bg-orange-500 text-white font-small px-4 py-2 rounded hover:bg-purple cursor-pointer">
              LEARN MORE
            </button>
          </div>

          <div className="w-1/2 pr-8 md:pl-12">
            <img src={ser} alt="img" className="w-full mb-3 justify-center" />
          </div>
        </div>
      </div>

    </div>
  );
};

export default SecondCard;










