import Card from './Card'

const testimonials = [
  { id: 1, name: "Ali Bravo", imageFile: "ali" },
  { id: 2, name: "Anisha Li", imageFile: "anisha" },
  { id: 1, name: "Richad Watts", imageFile: "shanai" },
]

export default function Testimonial() {
  return (
    <div className="container mx-auto mt-10 flex flex-col">
      <h1 className="text-center font-bold text-4xl md:text-5xl">What's different about Manage?</h1>
      <div className="flex flex-col justify-center space-y-16 md:space-y-0 md:flex-row md:items-stretch md:space-x-6 mt-24">
        {testimonials.map((t) => {
          return (<Card key={t.id} name={t.name} imageFile={t.imageFile} />)
        })}
      </div>
      <button className='my-12 mx-auto bg-brightRed text-white px-5 py-2 rounded-lg hover:bg-brightRedLight'>Get Started</button>
    </div>
  )
}