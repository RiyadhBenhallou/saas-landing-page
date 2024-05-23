import illustrationIntro from '../assets/illustration-intro.svg';

export default function Hero() {
  return(
    <section id="hero">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center px-6 mt-10">
        <div className="flex flex-col items-center md:items-start space-y-12 md:w-1/2">
        <h1 className="max-w-md text-4xl text-center font-bold md:text-5xl md:text-left">Bring everyone together to make better products</h1>
          <p className="text-center text-darkGrayishBlue max-w-sm md:text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
          <button className="px-6 py-2 bg-brightRed rounded-full text-white baseline border-2 border-brightRed hover:bg-white hover:text-brightRed font-bold">Get Started</button>
        </div>
        <div className="md:w-1/2">
          <img src={illustrationIntro} alt=""/>
        </div>
      </div>
    </section>
  )
}