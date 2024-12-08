import { useCart } from "../../../hooks/useCart";
import { Link } from "react-router-dom";
import { useState } from "react";
import CartHeaderIcon from "../../svgs/CartHeaderIcon";
import HumburgerIcon from "../../svgs/HumburgerIcon";

export default function Header() {
  const { state } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full bg-white border-b py-3 font-[sans-serif] min-h-[75px] tracking-wide relative z-50">
      <div className="container mx-auto lg:px-[50px] px-[20px]">
        <div className="flex justify-between items-center">
          {/* Logo and Mobile Menu Button */}
          <div className="flex gap-[16px] items-center justify-between w-full md:w-auto">
            <div className="flex gap-[16px] items-center">
              <button onClick={toggleMenu} className="lg:hidden p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
              <Link aria-label="go_to_home_header" to={"/"}>
                <img
                  src="https://readymadeui.com/readymadeui.svg"
                  alt="logo"
                  className="w-36"
                />
              </Link>
            </div>
            {/* Navigation Links */}
            <ul className="lg:flex hidden flex-col md:flex-row md:items-center gap-4 p-4 md:p-0">
              <li>
                <Link
                aria-label="gto_to__products"
                  to={"/"}
                  className="text-[#007bff] hover:text-[#007bff] text-[15px] font-semibold"
                >
                  Products
                </Link>
              </li>
              {/* Add more navigation items here */}
            </ul>
            {/* Hamburger Menu - Visible on md screens and below */}
          </div>

          {/* Navigation - Full width on desktop, hidden on mobile until menu clicked */}
          <nav
            className={`
            fixed md:static top-0 left-0 h-full w-[300px] md:w-auto
            bg-white md:bg-transparent
            transform ${isMenuOpen ? "translate-x-0" : "-translate-x-full"} 
            md:transform-none transition-transform duration-300 ease-in-out
            z-50 md:z-auto
            ${isMenuOpen ? "block" : "hidden"} md:block
          `}
          >
            {/* Mobile Menu Close Button */}
            <button
              aria-label="toggler"
              onClick={toggleMenu}
              className="md:hidden absolute top-4 right-4 rounded-full bg-white w-9 h-9 flex items-center justify-center border"
            >
              <HumburgerIcon />
            </button>

            {/* Mobile Logo */}
            <div className="md:hidden p-4 border-b mb-4">
              <Link aria-label="home_logo" to="/">
                <img
                  src="https://readymadeui.com/readymadeui.svg"
                  alt="logo"
                  className="w-36"
                />
              </Link>
            </div>
            <ul className="lg:hidden flex flex-col md:flex-row md:items-center gap-4 p-4 md:p-0">
              <li>
                <Link
                  aria-label="close_menu"
                  onClick={()=> setIsMenuOpen(false)}
                  to={"/"}
                  className="text-[#007bff] hover:text-[#007bff] text-[15px] font-semibold"
                >
                  Products
                </Link>
              </li>
              {/* Add more navigation items here */}
            </ul>
          </nav>

          {/* Cart Section */}
          <div className=" items-center">
            <Link
              aria-label="go_to_cart"
              to={"/cart"}
              className="flex flex-col items-center justify-center gap-0.5 cursor-pointer"
            >
              <div className="relative cart-icon">
                <CartHeaderIcon />
                <span className="absolute left-auto -ml-1 top-0 rounded-full bg-red-500 px-1 py-0 text-xs text-white">
                  {state?.itemCount || 0}
                </span>
              </div>
              <span className="text-[13px] font-semibold text-[#333]">
                Cart
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Overlay for mobile menu */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 md:hidden z-40"
          onClick={toggleMenu}
        />
      )}
    </header>
  );
}
