import React from "react";
import { ReactTyped } from "react-typed";
//import gym.jpeg from img folder

const Hero = () => {
  return (
    <div className="text-white background-hero">
      <div className="max-w-[800px]  w-full h-screen mx-auto text-center flex flex-col justify-center ">
        <p className="text-[#3b59a9] font-bold p-2">
          ACHIEVE YOUR FITNESS GOALS
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
          Transform Your Body.
        </h1>
        <div className="flex justify-center items-center">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">
            Customized training for
          </p>
          <ReactTyped
            className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2"
            strings={["Strength", "Cardio", "Flexibility"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className="md:text-2xl text-xl font-bold text-gray-500">
          Join us to achieve your fitness goals with personalized training
          plans.
        </p>
        <button className="bg-[#3b59a9] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">
          Join Now
        </button>
      </div>
    </div>
  );
};

export default Hero;
