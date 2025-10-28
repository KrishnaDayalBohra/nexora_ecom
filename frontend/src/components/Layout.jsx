import React from "react";
import { Link } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <div>
      {/* Navbar */}
      <nav className="bg-white shadow-sm py-3 px-6 flex justify-between items-center sticky top-0 z-50">
        <Link to="/" className="text-2xl font-semibold text-blue-600">
          Nexora Shop
        </Link>

        <div className="space-x-6 text-gray-700">
          <Link to="/" className="hover:text-blue-600">Home</Link>
          <Link to="/checkout" className="hover:text-blue-600">Checkout</Link>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container">{children}</main>

      {/* Footer */}
      <footer className="bg-white mt-10 py-6 text-center text-gray-500 border-t">
        <p>© 2025 Nexora Mock E-Com. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;
