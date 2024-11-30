import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Shagirds. All rights reserved.
        </p>
        <p className="text-xs mt-2">
          <a href="/terms" className="hover:underline">Terms of Service</a> | 
          <a href="/privacy" className="hover:underline ml-2">Privacy Policy</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
