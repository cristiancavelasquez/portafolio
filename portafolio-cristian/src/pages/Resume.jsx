import { FaGraduationCap, FaBriefcase } from "react-icons/fa";
import Informacion from "../components/Informacion";

function Resume() {
  return (
    <div className="lg:grid lg:grid-cols-6 lg:mt-12 lg:gap-10 lg:px-10 lg:pb-8">
      <div className="hidden lg:col-span-2 lg:inline">
        <Informacion />
      </div>
      <div className="dark:bg-[#1A1A1A] shadow-lg lg:bg-[#fffcf2]  lg:rounded-3xl px-4 pb-8 lg:col-span-4">
        <h1 className="text-[40px] mt-10 dark:text-white font-bold lg:hidden">Resume</h1>
        <div className="lg:flex items-center hidden">
            <h1 className="text-[40px] dark:text-white px-1 font-bold mr-3 ">
              Resume
            </h1>
            <div className="bg-[#0466c8] h-[2px] rounded-full w-[30%]"></div>
          </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-6 gap-y-6 mt-7">
          <div id="education">
            <div className="flex items-center space-x-2 mb-4">
              <i className="text-4xl text-[#0466c8] dark:text-[#7c162e] ">
                <FaGraduationCap />
              </i>
              <h4 className="text-[26px] dark:text-white font-medium">Education</h4>
            </div>
            <div className="bg-[#ffffff] shadow-lg dark:bg-[#303030] py-4 pl-5 pr-3 space-y-2 mb-6 rounded-lg ">
              <span className="text-sm text-gray-500 dark:text-[#DEDFE2]">2019-2022</span>
              <h3 className="text-xl dark:text-white">Bachelor in Industrial Engineer</h3>
              <p className="dark:text-[#DEDFE2]">Universidad de Los Andes</p>
            </div>
          </div>
          <div id="education">
            <div className="flex items-center space-x-2 mb-4">
              <i className="text-4xl text-[#0466c8] dark:text-[#7c162e] ">
                <FaBriefcase />
              </i>
              <h4 className="text-[26px] dark:text-white font-medium">Experience</h4>
            </div>
            <div className="bg-[#ffffff] shadow-lg dark:bg-[#303030] py-4 pl-5 pr-3 space-y-2 mb-6 rounded-lg ">
              <span className="text-sm text-gray-500 dark:text-[#DEDFE2]">2022-Present</span>
              <h3 className="text-xl dark:text-white">Data Analyst</h3>
              <p className="dark:text-[#DEDFE2]">Close Up International</p>
            </div>
            <div className="bg-[#ffffff] shadow-lg dark:bg-[#303030] py-4 pl-5 pr-3 space-y-2 mb-6 rounded-lg ">
              <span className="text-sm text-gray-500 dark:text-[#DEDFE2]">2021-2022</span>
              <h3 className="text-xl dark:text-white">Data Analyst Intern</h3>
              <p className="dark:text-[#DEDFE2]">Mazda Colombia</p>
            </div>

          </div>

          <div className="container pt-1 px-2 sm:px-5 md:px-2 lg:px-2 ">
            <div className="grid grid-cols-1  gap-8">
              <div className="col-span-1">
                <h4 className="text-[26px] dark:text-white font-medium mb-6">Working Skills</h4>
                <div className="mb-5">
                  <div className="flex justify-between mb-1">
                    <span className="dark:text-[#edf2f2] font-semibold text-gray-600 ">
                    Dashboards
                    </span>
                    <span className="font-semibold text-[#d81159]">95%</span>
                  </div>
                  <div className="w-full bg-[#edf2f2] rounded-full h-1">
                    <div className="bg-[#d81159] h-1 rounded-full w-[95%]"></div>
                  </div>
                </div>
                <div className="mb-5">
                  {" "}
                  <div className="flex justify-between mb-1">
                    <span className="dark:text-[#edf2f2] font-semibold text-gray-600 ">
                    Data Analysis
                    </span>
                    <span className="font-semibold text-orange-500">90%</span>
                  </div>
                  <div className="w-full bg-[#edf2f2] rounded-full h-1">
                    <div className="bg-orange-500 h-1 rounded-full w-[90%]"></div>
                  </div>
                </div>
                <div className="mb-5">
                  {" "}
                  <div className="flex justify-between mb-1">
                    <span className="dark:text-[#edf2f2] font-semibold text-gray-600 ">
                    Data Analytics
                    </span>
                    <span className="font-semibold text-[#8338ec]">85%</span>
                  </div>
                  <div className="w-full bg-[#edf2f2] rounded-full h-1">
                    <div className="bg-[#8338ec] h-1 rounded-full w-[85%]"></div>
                  </div>
                </div>
                <div className="mb-5">
                  {" "}
                  <div className="flex justify-between mb-1">
                    <span className="font-semibold dark:text-[#edf2f2] text-gray-600 ">
                      Front-end web development
                    </span>
                    <span className="font-semibold text-[#028090]">50%</span>
                  </div>
                  <div className="w-full bg-[#edf2f2] rounded-full h-1">
                    <div className="bg-[#028090] h-1 rounded-full w-[50%]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1">
            <div className="container pt-1 px-2 sm:px-5 md:px-0 lg:px-0 ">
              <h4 className="text-[26px] dark:text-white font-medium mb-8">Knowledges</h4>
              <div className="flex gap-y-5 gap-x-2.5 flex-wrap">
                <button className="bg-slate-100 shadow-md text-slate-800 rounded-md text-[16px] px-5 py-2">
                  Power BI
                </button>
                <button className="bg-slate-100 shadow-md text-slate-800 rounded-md text-[16px] px-5 py-2">
                  Python
                </button>
                <button className="bg-slate-100 shadow-md text-slate-800 rounded-md text-[16px] px-5 py-2">
                  R
                </button>
                <button className="bg-slate-100 shadow-md text-slate-800 rounded-md text-[16px] px-5 py-2">
                  SQL
                </button>
                <button className="bg-slate-100 shadow-md text-slate-800 rounded-md text-[16px] px-5 py-2">
                  MS-Office
                </button>
                <button className="bg-slate-100 shadow-md text-slate-800 rounded-md text-[16px] px-5 py-2">
                  JavaScript
                </button>
                <button className="bg-slate-100 shadow-md text-slate-800 rounded-md text-[16px] px-5 py-2">
                React
                </button>
                <button className="bg-slate-100 shadow-md text-slate-800 rounded-md text-[16px] px-5 py-2">
                Tailwind css
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
