import { useState } from "react";
import { Link } from "react-router";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-white z-50 shadow-sm transition-all duration-300">
        <div className="flex items-center justify-between w-full max-w-[1130px] py-[22px] mx-auto px-4 lg:px-0">
          <Link to={"/"}>
            <img src="/assets/images/logos/logo.svg" alt="logo" />
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-[50px] w-fit">
            <li>
              <Link to={"/"} className="hover:text-[#0D903A] transition">
                Home
              </Link>
            </li>
            <li>
              <a href="#" className="hover:text-[#0D903A] transition">
                Popular
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#0D903A] transition">
                Categories
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#0D903A] transition">
                Events
              </a>
            </li>
            <li>
              <Link
                to={"/check-booking"}
                className="hover:text-[#0D903A] transition"
              >
                My Booking
              </Link>
            </li>
          </ul>
          <a
            href="#"
            className="hidden lg:flex items-center gap-[10px] rounded-full border border-[#000929] py-3 px-5 hover:bg-gray-100 transition"
          >
            <img
              src="/assets/images/icons/call.svg"
              className="w-6 h-6"
              alt="icon"
            />
            <span className="font-semibold">Contact Us</span>
          </a>

          {/* Mobile Hamburger Button */}
          <button
            className="lg:hidden p-2 text-[#000929] focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <HiX size={30} /> : <HiMenu size={30} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-100 flex flex-col items-center py-6 gap-6 transition-all">
            <ul className="flex flex-col items-center gap-4 w-full text-lg">
              <li>
                <Link to={"/"} onClick={() => setIsMobileMenuOpen(false)}>
                  Home
                </Link>
              </li>
              <li>
                <a href="#" onClick={() => setIsMobileMenuOpen(false)}>
                  Popular
                </a>
              </li>
              <li>
                <a href="#" onClick={() => setIsMobileMenuOpen(false)}>
                  Categories
                </a>
              </li>
              <li>
                <a href="#" onClick={() => setIsMobileMenuOpen(false)}>
                  Events
                </a>
              </li>
              <li>
                <Link
                  to={"/check-booking"}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  My Booking
                </Link>
              </li>
            </ul>
            <a
              href="#"
              className="flex items-center gap-[10px] rounded-full border border-[#000929] py-3 px-5"
            >
              <img
                src="/assets/images/icons/call.svg"
                className="w-6 h-6"
                alt="icon"
              />
              <span className="font-semibold">Contact Us</span>
            </a>
          </div>
        )}
      </nav>

      {/* Spacer */}
      <div className="h-[100px] w-full"></div>
    </>
  );
}
