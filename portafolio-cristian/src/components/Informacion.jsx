import { NavLink } from "react-router-dom";
import {
  FaLinkedin,
  FaDownload,
  FaRegCalendarAlt,
  FaGithub,
  FaMobileAlt,
  FaEnvelopeOpenText,
  FaMapMarkerAlt,
} from "react-icons/fa";
import foto from "../img/IMG_3522.jpg";

function Informacion() {
  return (
    <div className="bg-[#FFFCF2] shadow-xl dark:bg-[#1A1A1A] rounded-3xl lg:relative flex items-center flex-col py-8 w-full col-span-2 lg:mt-48">
      <img
        className="h-60 w-60 rounded-3xl shadow-xl lg:absolute lg:-top-48"
        src={foto}
        alt="dwd"
      />
      <h2 className="mt-6 mb-1 text-[26px] dark:text-white font-semibold">
        Cristian Velasquez
      </h2>
      <h3 className="text-center mb-4 dark:text-[#DEE2E6] text-gray-500 inline-block px-5 py-1.5 text-[16px]">
        Industrial Engineer / Data-Analyst / Front-end Developer Jr
      </h3>
      <div className="flex justify-center space-x-3">
        <a
          target="_blank"
          href="https://www.linkedin.com/in/cristiancavelasquez/"
          className={
            "hover:bg-[#0466c8] hover:text-white h-10 w-10 bg-gray-200 rounded-lg flex justify-center items-center text-xl text-[#0e76a8]"
          }
        >
          <FaLinkedin />
        </a>
        <a
          target="_blank"
          href="https://github.com/cristiancavelasquez"
          className={
            "hover:bg-[#0466c8] hover:text-white h-10 w-10 bg-gray-200 rounded-lg flex justify-center items-center text-xl text-[#560bad]"
          }
        >
          <FaGithub />
        </a>
      </div>
      <div className="p-7 rounded-2xl mt-7 dark:bg-[#303030] bg-[#FFF7DE] w-[90%]">
        <div className="flex border-b border-gray-400 pb-2.5">
          <span className="bg-white dark:bg-transparent dark:shadow-none shadow-lg rounded-lg flex justify-center items-center h-10 w-10">
            <i>
              <FaMobileAlt className="dark:text-[#FFFFFF]" />
            </i>
          </span>
          <div className="text-left ml-2.5 ">
            <p className="text-xs font-semibold dark:text-[#DEDFE2]">Phone</p>
            <p className="dark:text-[#FFFFFF] text-gray-600">+57 3212382606</p>
          </div>
        </div>
        <div className="flex border-b border-gray-400 py-2.5">
          <span className="bg-white dark:bg-transparent dark:shadow-none shadow-lg rounded-lg flex justify-center items-center h-10 w-10">
            <i>
              <FaEnvelopeOpenText className="dark:text-[#FFFFFF]" />
            </i>
          </span>
          <div className="text-left ml-2.5">
            <p className="text-xs font-semibold  dark:text-[#DEDFE2] ">Email</p>
            <a
              href="mailto:cristiancavelasquez@gmail.com"
              className="lg:text-[12px] text-[12px] text-gray-600 dark:text-[#FFFFFF]"
            >
              cristiancavelasquez@gmail.com
            </a>
          </div>
        </div>
        <div className="flex border-b border-gray-400 py-2.5">
          <span className="bg-white dark:bg-transparent dark:shadow-none shadow-lg rounded-lg flex justify-center items-center h-10 w-10">
            <i>
              <FaMapMarkerAlt className="dark:text-[#FFFFFF]" />
            </i>
          </span>
          <div className="text-left ml-2.5">
            <p className="text-xs dark:text-[#DEDFE2] font-semibold">
              Location
            </p>
            <p className="dark:text-[#FFFFFF] text-gray-600">
              Bogotá, Colombia
            </p>
          </div>
        </div>
        <div className="flex py-2.5">
          <span className="bg-white dark:bg-transparent dark:shadow-none shadow-lg rounded-lg flex justify-center items-center h-10 w-10">
            <i>
              <FaRegCalendarAlt className="dark:text-[#FFFFFF]" />
            </i>
          </span>
          <div className="text-left ml-2.5">
            <p className="text-xs font-semibold  dark:text-[#DEDFE2]">
              Birthday
            </p>
            <p className="dark:text-[#FFFFFF] text-gray-600">Nov 05, 1999</p>
          </div>
        </div>
      </div>
      <a
        target="_blank"
        href="https://drive.google.com/file/d/1ZFFF18SqDmjy23pVWH3AJa66BeN43t34/view?usp=sharing"
        className="flex duration-300 transition  text-[#0466c8] hover:text-white border border-[#0466c8] hover:bg-[#0466c8] mt-5 items-center font-medium rounded-full text-lg px-5 py-2.5 text-center mr-2"
      >
        <FaDownload className="mr-3" />
        Download CV
      </a>
    </div>
  );
}

export default Informacion;
