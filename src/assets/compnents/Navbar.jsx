import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';



    const divStyle = {
        backgroundImage: "url('https://thembmarket.com/images/mblogo_circle_240.png')"
    }
  
function Navbar() {
  return (
    <nav className="md:bg-black  text-white p-7 shadow-md">
      <div className=" flex items-baseline  justify-center gap-[350px] h-5 mb-5">
        <div className="text-xl font-bold h-2 w-30"><img src="/mb.jpeg"/></div>
            <div className="flex flex-col items-end">
     <div className="flex space-x-4 mb-3.5"> 
     <a href="#" className="hover:text-blue-500"><FaFacebook size={24} /></a>
     <a href="#" className="hover:text-blue-500"><FaInstagram size={24} /></a>
     <a href="#" className="hover:text-blue-500"><FaTwitter size={24} /></a>
     <a href="#" className="hover:text-blue-500"><FaLinkedin size={24} /></a>
     </div>
        <ul className="flex items-center space-x-[50px]">
          <li><a href="#" className="hover:underline ">Why The MB Market</a></li>
          <li><a href="#" className="hover:underline ">Auctions</a></li>
          <li><a href="#" className="hover:underline ">Results</a></li>
          <li><a href="#" className="hover:underline ">Submit a Vehicle</a></li>
          <li><a href="#" className="hover:underline ">Features</a></li>
          <li><a href="/login" className="hover:underline ">Login</a></li>
        </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
