import React from 'react';

import { FaLinkedin } from "react-icons/fa";


import { FaFacebook } from "react-icons/fa";


import { FaSquareThreads } from "react-icons/fa6";


import { FaYoutube } from "react-icons/fa";


import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-customPaleGreen text-gray-700 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Newsletter Section */}
          <div>
            <h3 className="text-lg font-semibold">SUBSCRIBE TO OUR NEWSLETTER</h3>
            <p className="mt-4 text-sm">Lorem Ipsum Dolor Sit Amet. Aut Ipsum Illum Et Nostrum Quidem Aut Necesbus Enim</p>
            <form className="mt-4">
              <input 
                type="email" 
                placeholder="Enter Your Email Address" 
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-300"
              />
              <button 
                type="submit" 
                className="mt-4 bg-customLightGreen text-white py-1 px-4 rounded-full hover:bg-green-600"
              >
                SUBSCRIBE
              </button>
            </form>
          </div>

          {/* About Us Section */}
          <div>
            <h3 className="text-lg font-semibold">ABOUT US</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="#" className="hover:underline">Our Story</a></li>
              <li><a href="#" className="hover:underline">Blogs</a></li>
              <li><a href="#" className="hover:underline">Careers</a></li>
              <li><a href="#" className="hover:underline">Contact Us</a></li>
              <li><a href="#" className="hover:underline">Help & Support</a></li>
            </ul>
          </div>

          {/* Our Services Section */}
          <div>
            <h3 className="text-lg font-semibold">OUR SERVICES</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="#" className="hover:underline">Book Maali</a></li>
              <li><a href="#" className="hover:underline">Plant Day Care</a></li>
              <li><a href="#" className="hover:underline">Rent Plants</a></li>
              <li><a href="#" className="hover:underline">Plants & Pots</a></li>
              <li><a href="#" className="hover:underline">Gardening Tools</a></li>
            </ul>
          </div>

          {/* Useful Links Section */}
          <div>
            <h3 className="text-lg font-semibold">USEFUL LINKS</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="#" className="hover:underline">My Account</a></li>
              <li><a href="#" className="hover:underline">Orders & Returns</a></li>
              <li><a href="#" className="hover:underline">Track Order</a></li>
              <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
              <li><a href="#" className="hover:underline">Return, Refund & Replacement Policy</a></li>
            </ul>
          </div>

          {/* Contact Info Section */}
          <div>
            <h3 className="text-lg font-semibold">GET IN TOUCH</h3>
            <address className="mt-4 text-sm not-italic">
              <p>Address: F-262, First Floor, Sushant Lok Phase-III, Sector-57, Gurgaon, Haryana, India 122003</p>
              <p>Call: <a href="tel:+919958287272" className="hover:underline">+919958287272</a></p>
              <p>Email: <a href="mailto:care@chaperoneplants.com" className="hover:underline">care@chaperoneplants.com</a></p>
            </address>
          </div>
        </div>

        {/* chaperon about */}
        <div className='mt-5 mb-5'>
            <h3 className='text-gray-800 font-semibold text-lg'>CHAPERONE</h3>
            <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad minima eum id nesciunt, voluptas quibusdam impedit optio sapiente libero quas quae, cum aliquid iste maiores omnis alias dolor a possimus?</p>
        </div>

        {/* Follow us on */}
        {/* Social Links */}
        <div className="mt-5 sm:mt-0 mb-5">
            <h3 className='text-gray-800 font-semibold text-lg pb-2'>Follow us on</h3>
            <ul className="flex space-x-4 text-xl">
              <li><a href="#" className="hover:text-gray-800"><FaInstagram /></a></li>
              <li><a href="#" className="hover:text-gray-800"><FaFacebook /></a></li>
              <li><a href="#" className="hover:text-gray-800"><FaSquareThreads /></a></li>
              <li><a href="#" className="hover:text-gray-800"><FaYoutube /></a></li>
              <li><a href="#" className="hover:text-gray-800"><FaLinkedin /></a></li>
            </ul>
          </div>
      </div>
       {/* Bottom Section */}
       <hr />
       <div className="bottom-Section flex flex-col items-center sm:flex-row justify-between pt-5">
          <div className="text-center sm:text-left">
            <p className="text-md font-semibold text-customBlack">
              © 2023, chaperone.com All rights reserved.
            </p>
          </div>          
        </div>
    </footer>
    
  );
};

export default Footer;






