import Informacion from "../components/Informacion"
import Whatido from "../components/Whatido"

function About() {

  return (
 <div className=' min-h-screen pb-8 px-2'>
  <h1 className='text-[40px] font-bold '>About Me</h1>
  <Informacion />
  <div className="bg-white flex items-center flex-col px-[10%] mb-6">
    <p className="text-[#44566c] leading-7">I'm Creative Director and UI/UX Designer from Sydney, Australia, working in web development and print media. I enjoy turning complex problems into simple, beautiful and intuitive designs.</p>
    <p className="text-[#44566c] leading-7 mt-2.5">My aim is to bring across your message and identity in the most creative way. I created web design for many famous brand companies.</p>
  </div>
  <h1 className='text-[40px] font-bold '>What I do!</h1>
  <Whatido />
 </div>
  )

}

export default About