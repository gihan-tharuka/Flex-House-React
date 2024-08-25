import React from 'react';
import Premium from '../assets/img//GOLD.png'
//BRONZE
import Bronze from '../assets/img//BRONZE.png'
//SILVER
import Silver from '../assets/img//SILVER.png'
const Cards = () => {
  return (
    <div className="w-full py-[10rem] px-4 bg-white ">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src={Bronze}
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-8">
            Basic Membership
          </h2>
          <p className="text-center text-4xl font-bold">$49/month</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">
              Limited access to equipment
            </p>
            <p className="py-2 border-b mx-8">Group classes only</p>
            <p className="py-2 border-b mx-8">No personal training</p>
          </div>
          <button className="bg-[#3b59a9] text-white w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">
            Join Now
          </button>
        </div>
        <div className="w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-transparent"
            src={Silver}
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-8">
            Standard Membership
          </h2>
          <p className="text-center text-4xl font-bold">$79/month</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">Access to all equipment</p>
            <p className="py-2 border-b mx-8">
              Group classes and personal training
            </p>
            <p className="py-2 border-b mx-8">
              Priority access to popular classes
            </p>
          </div>
          <button className="bg-[#3b59a9] text-white w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">
            Join Now
          </button>
        </div>
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src={Premium}
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-8">
            Premium Membership
          </h2>
          <p className="text-center text-4xl font-bold">$99/month</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">
              Unlimited access to all equipment
            </p>
            <p className="py-2 border-b mx-8">Personalized training plans</p>
            <p className="py-2 border-b mx-8">
              Priority access to all facilities
            </p>
          </div>
          <button className="bg-[#3b59a9]  text-white w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">
            Join Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;