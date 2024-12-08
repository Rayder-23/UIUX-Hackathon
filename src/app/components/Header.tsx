"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faYoutube, faFacebookF, faTwitter } from "@fortawesome/free-brands-svg-icons";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header>
      {/* Top Bar */}
      <div className="bg-gray-900 text-white text-sm">
        <div className="container mx-auto flex justify-between items-center px-4 py-2">
          {/* Left Text */}
          <div className="flex items-center space-x-4">
            <span>(225) 555-0118</span>
            <span>|</span>
            <span>michelle.rivera@example.com</span>
          </div>

          {/* Center Text */}
          <div className="text-center flex-1">
            <span>Follow Us and get a chance to win 80% off</span>
          </div>

          {/* Right Text with Social Icons */}
          <div className="flex items-center space-x-4">
            <span>Follow Us:</span>
            <div className="flex space-x-3">
              <a href="#" aria-label="Instagram" className="hover:text-blue-500">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="#" aria-label="YouTube" className="hover:text-blue-500">
                <FontAwesomeIcon icon={faYoutube} />
              </a>
              <a href="#" aria-label="Facebook" className="hover:text-blue-500">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="#" aria-label="Twitter" className="hover:text-blue-500">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-white shadow-md">
        <div className="container mx-auto flex justify-between items-center px-4 py-3">
          {/* Logo */}
          <div className="text-2xl font-bold text-[#252B42]">
            <Link href="/">Bandage</Link>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-6">
            <Link href="/" className="text-[#737373] hover:text-blue-500">
              Home
            </Link>
            <Link href="/shop" className="text-[#737373] hover:text-blue-500">
              Shop
            </Link>
            <Link href="/about" className="text-[#737373] hover:text-blue-500">
              About
            </Link>
            <Link href="/blog" className="text-[#737373] hover:text-blue-500">
              Blog
            </Link>
            <Link href="/contact" className="text-[#737373] hover:text-blue-500">
              Contact
            </Link>
            <Link href="/pages" className="text-[#737373] hover:text-blue-500">
              Pages
            </Link>
          </nav>

          {/* Utilities */}
          <div className="flex space-x-4">
            <Link href="/login" className="text-blue-500 hover:text-blue-700">
              Login / Register
            </Link>
            <Link href="/search" className="text-blue-500 hover:text-blue-700">
              <SearchIcon fontSize="small" />
            </Link>
            <Link href="/cart" className="text-blue-500 hover:text-blue-700 flex items-center">
              <ShoppingCartIcon fontSize="small" />
              <span className="text-sm ml-1">1</span>
            </Link>
            <Link href="/wishlist" className="text-blue-500 hover:text-blue-700 flex items-center">
              <FavoriteBorderIcon fontSize="small" />
              <span className="text-sm ml-1">1</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;