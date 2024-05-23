import ali from '../assets/avatar-ali.png'
import anisha from '../assets/avatar-anisha.png'
import shanai from '../assets/avatar-shanai.png'

export default function Card({name, imageFile}: Props) {
  return(
    <div className="bg-slate-100 flex flex-col items-center justify-center space-y-6 mt-8 p-6 rounded-lg relative">
      <img src ={ali} alt="" className="absolute -top-12 w-24"/>
      <h3 className="font-bold text-lg pt-6">{name}</h3>
      <p className="text-sm text-gray-400 max-w-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
    </div>
  )
}

interface Props {
  name: string;
  imageFile: string;
}