import React from 'react';

const Newsletter = () => {
  return (
    <div className="w-full py-16 text-white px-4 pt-20 pb-20">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2 my-4">
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Get Fit, Stay Motivated!
          </h1>
          <p>
            Join our fitness community and receive exclusive tips, workout
            routines, and nutrition advice.
          </p>
        </div>
        <div className="my-4">
          <div className="flex flex-col sm:flex-row items-center justify-between w-full">
            <input
              className="p-3 flex w-full rounded-md text-black"
              type="email"
              placeholder="Enter Email"
            />
            <button className="bg-[#3b59a9] text-white rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3">
              Sign Up
            </button>
          </div>
          <p>
            We care bout the protection of your data. Read our{" "}
            <span className="text-[#3b59a9]">Privacy Policy.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;