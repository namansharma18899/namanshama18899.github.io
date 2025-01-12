import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-6 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Naman Sharma. All rights reserved.
        </p>
        <div className="mt-4 flex justify-center space-x-4">
          <a
            href="https://github.com/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-gray-700 text-sm"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/your-profile/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-gray-700 text-sm"
          >
            LinkedIn
          </a>
          <a
            href="mailto:your-email@example.com"
            className="text-gray-500 hover:text-gray-700 text-sm"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
