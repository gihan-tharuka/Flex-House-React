import React from 'react';
import Trainer from '../assets/img/Personal-Trainer.jpg';

const Analytics = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4" src={Trainer} alt="Trainer" />
        <div className="flex flex-col justify-center">
          <p className="text-[#3b59a9] font-bold ">ABOUT OUR GYM</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Achieve Your Fitness Goals with Us
          </h1>
          <p>
            At our gym, we believe in empowering individuals to achieve their
            fitness aspirations. Our certified trainers are dedicated to
            providing personalized workout plans tailored to your unique needs.
            Whether you're looking to build strength, improve flexibility, or
            enhance endurance, we are here to guide you every step of the way.
            Join us and transform your body in a supportive and motivating
            environment.
          </p>
          <button className="bg-[#3b59a9] text-white w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;