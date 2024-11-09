import Link from "next/link"

const Technology = () => {
  return (
    <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 min-h-screen text-white md:px-28 px-4 py-20 flex flex-col items-center justify-center h-full w-full">
      <h1 className="text-center text-5xl font-serif font-bold">Technology</h1>
      <p className="py-6 md:w-1/2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias esse et ullam, amet ad eligendi iusto explicabo id corporis hic in tempore dolorem, deleniti enim harum obcaecati ipsa blanditiis? Laudantium. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus, consequuntur fugiat veniam provident sapiente, id est earum maiores quidem atque velit eum vitae exercitationem odit ipsam cupiditate aliquam laboriosam facilis!</p>
      <Link href='/'>
      <button className="bg-blue-400 text-white hover:bg-blue-500 px-4 py-1 rounded-md duration-200 mt-6">Go back</button>
      </Link>
    </div>
  )
}

export default Technology