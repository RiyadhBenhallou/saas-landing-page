import logo from '../assets/logo.svg';
import { useState } from 'react'


const nav = ['Pricing', 'About', 'Community', 'Contact'];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu visibility

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="relative container mx-auto p-6">
      <div className="flex justify-between items-center">
        <div className="pt-2">
          <img src={logo} alt="" />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden block focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brightRed p-2 rounded-md"
          onClick={toggleMenu}
        >
          {/* <img src={hamburgerIcon} alt="Menu" /> */}
                              
  
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6 items-center">
          {nav.map((navItem) => (
            <a
              href="#"
              key={navItem} // Add key for better performance
              className="hover:text-darkGrayishBlue"
            >
              {navItem}
            </a>
          ))}
        </div>

        {/* Mobile Navigation (conditionally rendered) */}
        <div
          className={`absolute top-full left-0 bg-white w-full md:hidden transition duration-300 ease-in-out ${isOpen ? 'block' : 'hidden'
            }`}
        >
          <ul className="space-y-2 px-4 py-6">
            {nav.map((navItem) => (
              <li key={navItem} className="text-lg hover:text-darkGrayishBlue">
                <a href="#">{navItem}</a>
              </li>
            ))}
          </ul>
        </div>

        <button className="hidden md:block px-6 py-2 bg-brightRed rounded-full text-white baseline border-2 border-brightRed hover:bg-white hover:text-brightRed font-bold">
          Get Started
        </button>                    
                      
                      
                      
  
      </div>
    </nav>
  );
}
