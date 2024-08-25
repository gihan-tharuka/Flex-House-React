import React from 'react';
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
      <div>
        <h1 className="w-full text-3xl font-bold text-[#3b59a9]">Flex House</h1>
        <p className="py-4">
          At Flex House, we are dedicated to helping you achieve your fitness
          goals with state-of-the-art equipment, experienced trainers, and a
          supportive community. Join us and start your transformation journey
          today!
        </p>
        <div className="flex justify-between md:w-[75%] my-6">
          <FaFacebookSquare size={30} />
          <FaInstagram size={30} />
          <FaTwitterSquare size={30} />
          <FaGithubSquare size={30} />
          <FaDribbbleSquare size={30} />
        </div>
      </div>
      <div className="lg:col-span-2 flex justify-between mt-6">
        <div>
          <h6 className="font-medium text-gray-400">Programs</h6>
          <ul>
            <li className="py-2 text-sm">Strength Training</li>
            <li className="py-2 text-sm">Cardio Workouts</li>
            <li className="py-2 text-sm">Yoga & Flexibility</li>
            <li className="py-2 text-sm">Personal Training</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Support</h6>
          <ul>
            <li className="py-2 text-sm">Membership</li>
            <li className="py-2 text-sm">FAQs</li>
            <li className="py-2 text-sm">Contact Us</li>
            <li className="py-2 text-sm">Privacy Policy</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">About Us</h6>
          <ul>
            <li className="py-2 text-sm">Our Story</li>
            <li className="py-2 text-sm">Meet the Team</li>
            <li className="py-2 text-sm">Careers</li>
            <li className="py-2 text-sm">Testimonials</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Get Involved</h6>
          <ul>
            <li className="py-2 text-sm">Events</li>
            <li className="py-2 text-sm">Workshops</li>
            <li className="py-2 text-sm">Community Programs</li>
            <li className="py-2 text-sm">Volunteer</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;