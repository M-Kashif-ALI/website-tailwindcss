import Image from "next/image";
import { FaReact } from "react-icons/fa";
import { FaShuttleSpace } from "react-icons/fa6";
import { FaSpaceAwesome } from "react-icons/fa6";
import waves from '../../../public/wave Gif.gif'


const Services = () => {

  const serviceData = [
    {
    title: "HST",
    content: "300-1500km",
    description:
      "Used for astronomical observations, capturing stunning images of the universe.",
    icon: <FaReact className="text-7xl" />,
    aosDelay: "300",
  },
  {
    title: "ISS",
    content: "500-1500km",
    description:
      ", it's a habitable artificial satellite orbiting Earth and serves as a space environment research laboratory",
    icon: <FaShuttleSpace className="text-7xl" />,
    aosDelay: "500",
  },
  {
    title: "GPS",
    content: "300-1500km",
    description:
      "Part of the Global Positioning System (GPS) used for navigation.",
    icon: <FaSpaceAwesome className="text-7xl" />,
    aosDelay: "700",
  },
  ]

  return (
    <div className="md:px-28 px-4 bg-black relative z-[50]">
    <div className="container">
      <div className="min-h-[300px]">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 relative z-10 text-white">
        {serviceData.map((data) => (
              <div key={data.title} className="min-h-[180px] flex flex-col justify-center items-center gap-2 rounded-xl bg-sky-900/60 backdrop-blur-sm text-center text-2xl py-8 md:px-3 w-full lg:w-[300px] mx-auto">
                {data.icon}
                <h1>{data.title}</h1>
                <p>{data.content}</p>
                <p className="text-sm">{data.description}</p>
              </div>
            ))}
        </div>
        <Image src={waves} alt="" height={100} width={100} className="h-[200px] md:w-full w-[400px] object-cover mix-blend-screen -translate-y-24 relative z-[0]"/>
      </div>
    </div>
    </div>
  )
}

export default Services