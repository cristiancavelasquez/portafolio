import Informacion from "../components/Informacion";
import Whatido from "../components/Whatido";

function About() {
  return (
    <div className=" min-h-screen pb-8 px-10 ">
      <h1 className="text-[40px] font-bold mt-5 dark:text-white lg:hidden">
        About Me
      </h1>
      <div className=" lg:grid lg:grid-cols-6 lg:mt-12 gap-10">
        <Informacion />
        <div className="lg:bg-[#fffcf2] shadow-xl rounded-3xl lg:col-span-4 lg:dark:bg-[#1A1A1A] lg:rounded-3xl ">
          <div className="lg:flex items-center hidden">
            <h1 className="text-[40px] dark:text-[#FBFCFF] font-bold px-5 mr-3 ">
              About Me
            </h1>
            <div className="bg-[#0466c8] h-[2px] rounded-full w-[30%]"></div>
          </div>
          <div className="flex items-center flex-col px-[10%] my-6 ">
            <p className="text-[#44566c] mt-5 dark:text-[#DEE2E6] leading-7">
              I love to dig into complex problems and solve them with modern
              technology. I create, scale and optimize dashboards that allow
              stakeholders to make correct decisions. To accomplish this, I
              focus on generating key industry indicators, working as a team and
              constantly learning.
            </p>
            <p className="text-[#44566c] dark:text-[#DEE2E6] leading-7 mt-2.5">
              I have held a couple of positions as a data analyst in two
              different industries such as automotive and pharmaceutical. I have
              developed numerous dashboards mainly with power BI. With Data
              analytics experience I can also perform advanced analytics to
              large data sets. Automating the processes concerning Data
              Extraction and Data Transformation also falls under my expertise.
            </p>
            <p className="text-[#44566c] dark:text-[#DEE2E6] leading-7 mt-2.5">
              I have recently been exploring some topics related to frontend
              development, always trying to connect this with data analysis.
            </p>
          </div>
          <div className="lg:px-5 lg:mb-6">
            <h1 className="text-[40px] font-bold dark:text-[#FBFCFF] ">
              What I do!
            </h1>
            <Whatido />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
