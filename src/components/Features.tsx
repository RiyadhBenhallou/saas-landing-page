
const features = [{ id: '01', title: "Track your business.", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam" }, { id: '02', title: "Track your business.", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam" }, { id: '03', title: "Track your business.", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam" }]

export default function Features() {
  return (
    <section id="features">
      <div className="container mx-auto flex flex-col space-y-12 md:space-y-0 md:flex-row mt-10 px-4">
        <div className="flex flex-col space-y-12 md:w-1/2 items-center">
          <h2 className="max-w-md text-4xl text-center font-bold md:text-left text-center">What's the difference about manage?</h2>
          <p className="text-center max-w-sm md:text-left text-darkGrayishBlue">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
        </div>


        <div className="flex flex-col space-y-8 md:w-1/2 items-center md:ml-2">
          {features.map(feature => {
            return (
              <div className="flex flex-col sapce-y-3">

                <div className="flex items-center space-x-3">
                  <div className="px-4 py-1 bg-brightRed rounded-full text-white">{feature.id}</div>
                  <h3 className="font-bold text-lg">{feature.title}</h3>
                </div>
                <p className="md:pl-16 text-center max-w-sm md:text-left text-darkGrayishBlue">{feature.content}</p>
              </div>
            )
          })}

        </div>
      </div>
    </section>
  )
}