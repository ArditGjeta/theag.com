import React from "react";

function Footer() {
  return (
    <footer className="bg-[#f7f7f7] text-gray-900 px-6 py-10 mt-0">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Logo and description */}
        <div>
          <h2 className="text-2xl font-bold mb-2">The AG Market</h2>
          <p className="text-sm text-gray-400">
            The premier marketplace for enthusiast Mercedes-Benz cars.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-col space-y-2">
          <h3 className="text-lg font-semibold mb-1">Explore</h3>
          <a href="#" className="text-gray-400 hover:text-black">Auctions</a>
          <a href="#" className="text-gray-400 hover:text-black">Submit a Car</a>
          <a href="#" className="text-gray-400 hover:text-black">Results</a>
          <a href="#" className="text-gray-400 hover:text-black">Login</a>
        </div>

        {/* Social links */}
        <div>
          <h3 className="text-lg font-semibold mb-1">Connect</h3>
          <div className="flex space-x-4 mt-2">
            <a href="#" className="text-gray-400 hover:text-black">
              <i className="fab fa-facebook"></i> Facebook
            </a>
            <a href="#" className="text-gray-400 hover:text-black">
              <i className="fab fa-instagram"></i> Instagram
            </a>
            <a href="#" className="text-gray-400 hover:text-black">
              <i className="fab fa-twitter"></i> Twitter
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-300 pt-4 text-sm text-center text-gray-500">
        &copy; {new Date().getFullYear()} The AG Market. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
