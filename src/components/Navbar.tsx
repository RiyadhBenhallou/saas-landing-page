import logo from '../assets/logo.svg';

const nav = ['Pricing', 'About', 'Community', 'Contact']

export default function Navbar() {
  return (
    <nav className="relative container mx-auto p-6">
      <div className="flex justify-between items-center">
        <div className="pt-2">
          <img src={logo} alt="" />
        </div>
        <div className="hidden md:flex space-x-6 items-center">
          {nav.map(nav => {
            return (
              <a href="#" className="hover:text-darkGrayishBlue">{nav}</a>
            )
          })}
        </div>
        <button className="hidden md:block px-6 py-2 bg-brightRed rounded-full text-white baseline border-2 border-brightRed hover:bg-white hover:text-brightRed font-bold">Get Started</button>
      </div>
    </nav>
  )
}