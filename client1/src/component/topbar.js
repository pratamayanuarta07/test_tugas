import { VscThreeBars } from "react-icons/vsc";
import Logo from "../logo.svg";
import { Menu } from "@headlessui/react";
import { useState } from "react";

export default function TopBar({ showNav, setShowNav }) {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = () => {
    alert("Anda telah logout");
  };

  return (
    <div
      className={`fixed w-full h-16 flex justify-between items-center transition-all duration-[400ms] ${
        showNav ? "pl-56" : ""
      }`}
    >
      <div className="pl-4 md:pl-16">
        <VscThreeBars
          className="w-8 h-8 text-gray-700 cursor-pointer"
          onClick={() => setShowNav(!showNav)}
        />
      </div>
      <div className="flex items-center pr-4 md:pr-16">
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <img
              src={Logo}
              className="h-8 border-2 border-white rounded-full shadow-sm md:mr-4"
              alt="profile"
              onClick={toggleDropdown}
            />
             {isDropdownOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-lg">
         <button>sss</button>
        </div>
      )}
          </div>
        </Menu>
      </div>
    </div>
  );
}
