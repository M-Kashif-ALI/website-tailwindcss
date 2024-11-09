import Image from "next/image"
import satelite1 from '../../../public/satelite1.jpg'
import satelite2 from '../../../public/satelite2.jpg'
import NavBar from "../components/navBar"

const Satelite = () => {
  return (
    <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 min-h-screen flex items-center justify-center text-white px-10 relative z-50">
      <NavBar/>
      <div className="conatiner">
        <div className="grid grid-cols-1 sm:grid-cols-2 items-center mt-24 gap-4">
          <div className='relative left-24'>
            <Image src={satelite1} alt="satelite" height={500} width={500}/>
          </div>
          <div className="space-y-3 xl:pr-36 p-4">
            <p className="uppercase text-sky-800 text-xl font-semibold">Our Mission</p>
            <h1 className="uppercase text-5xl">Rapidcast</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam temporibus, maiores sit accusamus ullam repellendus ipsa quae? Beatae perspiciatis, eos sed officia cumque vitae architecto sapiente distinctio. Recusandae, iure incidunt velit aspernatur ad iusto dignissimos corrupti facilis molestiae doloribus repellat similique consectetur, excepturi assumenda amet.</p>
            <button className="bg-blue-400 text-white hover:bg-blue-500 px-4 py-1 rounded-md duration-200">Learn More</button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 items-center mt-20 mb-10">
          <div className='relative left-10 order-2'>
            <Image src={satelite2} alt="satelite" height={500} width={500}/>
          </div>
          <div className="space-y-3 xl:pr-36 py-4 order-1">
            <p className="uppercase text-sky-800 text-xl font-semibold">Our Mission</p>
            <h1 className="uppercase text-5xl">Rapidcast</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam temporibus, maiores sit accusamus ullam repellendus ipsa quae? Beatae perspiciatis, eos sed officia cumque vitae architecto sapiente distinctio. Recusandae, iure incidunt velit aspernatur ad iusto dignissimos corrupti facilis molestiae doloribus repellat similique consectetur, excepturi assumenda amet.</p>
            <button className="bg-blue-400 text-white hover:bg-blue-500 px-4 py-1 rounded-md duration-200">Learn More</button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Satelite