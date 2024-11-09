import Image from 'next/image'
import moon from '../../../public/moon-surface-hd.png'


const Hero = () => {
  return (
    <div className="bg-black/20 h-full text-white relative z-50">
      <div className="h-full flex justify-center items-center p-4">
        <div className="container grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-4 md:pr-36">
            <h1 className="text-5xl font-bold uppercase">Orbit The Earth</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam magni molestias eius deserunt odit, earum aspernatur officiis perspiciatis harum veniam dolores illo unde aliquam qui quidem hic? Voluptatibus sint odio reiciendis molestias enim dolores, earum quaerat quas facere quos pariatur dolorem quam, nesciunt perferendis voluptate, magnam atque ad.</p>
            <button className="bg-blue-400 text-white hover:bg-blue-500 px-4 py-1 rounded-md duration-200">Learn More</button>
          </div>
          <div></div>
        </div>
      </div>
      <Image src={moon} alt='' height={300} width={300} className='absolute right-0 bottom-0 h-[200px] w-full brightness-50 z-10 pt-1 md:pt-0' />

      <div className='absolute bottom-0 w-full z-30 bg-gradient-to-b from-transparent from-10% to-black to-90% h-[20px] sm:h-[50px] md:h-[60px]'>

      </div>
    </div>
  )
}

export default Hero