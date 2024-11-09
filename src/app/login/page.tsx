import Link from 'next/link'


const Login = () => {
  const bgVideo = "/video/earth-bg.mp4"
  return (
    <div className='overflow-hidden'>
      <div>
        <video src={bgVideo} autoPlay muted loop className="md:h-[700px] h-full w-full object-cover z-[-1] absolute" />
      </div >
      <div className='text-white backdrop-blur-sm bg-black/20 md:mb-10 md:h-[600px] md:w-[600px] mx-auto rounded-xl'>
        <h1 className='flex items-center justify-center h-[100px] text-3xl font-bold font-serif'>Login</h1>

        <div>
          <div className='flex items-center justify-center my-3 md:gap-2'>
            <label htmlFor="name" className='font-semibold md:text-xl text-lg font-serif'>Username:</label>
            <input type="text" placeholder='Enter your username' name='name' className='py-1 md:px-3 px-2 border text-gray-400 bg-transparent' />
          </div>

          <div className='flex items-center justify-center mt-10 md:gap-2'>
            <label htmlFor="name" className='font-semibold md:text-xl text-lg font-serif'>Email:</label>
            <input type="email" placeholder='Enter your email' name='name' className='py-1 md:px-3 px-2 border text-gray-400 bg-transparent' />
          </div>

          <div className='flex items-center justify-center mt-10 md:gap-2 gap-1'>
            <label htmlFor="name" className='font-semibold md:text-xl text-lg font-serif'>Password:</label>
            <input type="password" placeholder='Enter your password' name='name' className='py-1 md:px-3 px-2 border text-gray-400 bg-transparent' />
          </div>

          <div className="flex items-center justify-center mt-10 gap-5">
            <div className='flex gap-2'>
            <label htmlFor="male">Male</label>
            <input type="radio" name="gender" value="male" id="male" />
            </div>

            <div className='flex gap-2'>
            <label htmlFor="female">Female</label>
            <input type="radio" name="gender" value="female" id="female" />
            </div>

          </div>
        </div>

        <Link href='/'>
        <button className='md:my-20 my-5 md:mx-[270px] mx-[130px] font-serif font-semibold text-xl bg-blue-400 text-white hover:bg-blue-500 px-4 py-1 rounded-md duration-200'>Login</button>
        </Link>
        
      </div>
    </div>
  )
}

export default Login