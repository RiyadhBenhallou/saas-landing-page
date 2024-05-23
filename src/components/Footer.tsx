import logo from '../assets/logo-white.svg'
import facebook from '../assets/icon-facebook.svg'
import instagram from '../assets/icon-instagram.svg'
import pinterest from '../assets/icon-pinterest.svg'

const links = [
  {id: 1, title: "Home", link: "#"},
  {id: 2, title: "Contact", link: "#"},
  {id: 3, title: "Products", link: "#"},
  {id: 4, title: "About", link: "#"},
  {id: 5, title: "Resources", link: "#"}
]

export default function Footer() {
  return(
    <div className="p-6 bg-black flex flex-col space-y-6 md:flex-row md:space-y-0 md:justify-between">
      <div>
        <img src={logo} alt="" />
      </div>
      <div className='flex flex-col space-y-1 text-white'>
        {links.map(link => {
          return(
            <a href={link.link} className="font-light hover:text-gray-300">{link.title}</a>
          )
        })}
      
      </div>

      <div className='flex flex-col space-y-1 text-white'>

        
        {links.map(link => {
          return(
            <a href={link.link} className="font-light hover:text-gray-300">{link.title}</a>
          )
        })}

      </div>

      <div className='flex flex-col space-y-2 text-white md:space-y-0 md:space-x-2 md:flex-row items-start'>
        <img src={facebook} alt="" className='w-6'/>
        <img src={instagram} alt="" className='w-6'/>
        <img src={pinterest} alt="" className='w-6'/>
      </div>
      
    </div>
  )
}