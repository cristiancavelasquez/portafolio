import Informacion from "../components/Informacion";

function Contact() {
  return (
    <div className="lg:grid lg:grid-cols-6 lg:mt-12 lg:gap-10 lg:px-10 lg:pb-8">
      <div className="hidden lg:col-span-2 lg:inline">
        <Informacion />
      </div>
      <div className="pb-8 lg:bg-[#fffcf2] shadow-lg dark:shadow-none px-2 rounded-3xl lg:dark:bg-[#1A1A1A] lg:col-span-4 ">
        <h1 className="text-[40px] dark:text-white mt-10 font-bold lg:hidden">
          Contact{" "}
        </h1>
        <div className="lg:flex items-center px-2 hidden mb-6">
          <h1 className="text-[40px] dark:text-white px-1 font-bold mr-3 ">
            Contact
          </h1>
          <div className="bg-[#0466c8] h-[2px] rounded-full w-[30%]"></div>
        </div>
        <div className="mx-4 md:mx-[60px] p-4 lg:px-0 md:px-16 md:pb-16  rounded-xl mb-[30px] md:mb[60px]">
          <h3 className="text-[25px]">
            <span className="text-gray-700 dark:text-white">
              Im always open to discussing
            </span>
            <br />
            <span className="font-semibold dark:text-white">
              product design or partnerships.
            </span>
          </h3>
          <form action="">
            <div className="mt-4">
              <span className="dark:text-white">
                Please Fill required fields
              </span>
            </div>
            <div className="relative z-0 w-full mt-10 mb-8">
              <input
                className="block autofill:bg-transparent py-2.5 px-0 w-full text-sm  text-gray-300 bg-transparent border-0 border-b-2 border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-orange-500"
                type="text"
              />
              <label
                className="peer-focus:font-medium absolute dark:text-white text-gray-500 dark:text-color-910 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#FF6464] peer-focus:dark:text-[#FF6464] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
                htmlFor=""
              >
                Name*
              </label>
            </div>
            <div className="relative z-0 w-full mt-10 mb-8">
              <input
                className="block autofill:bg-transparent py-2.5 px-0 w-full text-sm text-gray-300 bg-transparent border-0 border-b-2 border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-orange-500"
                type="email"
              />
              <label
                className="peer-focus:font-medium dark:text-white absolute text-gray-500 dark:text-color-910 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#FF6464] peer-focus:dark:text-[#FF6464] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
                htmlFor=""
              >
                Email*
              </label>
            </div>
            <div className="relative z-0 w-full mt-10 mb-8">
              <input
                className="block autofill:bg-transparent py-2.5 px-0 w-full text-sm text-gray-300 bg-transparent border-0 border-b-2 border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-orange-500"
                type="text"
              />
              <label
                className="peer-focus:font-medium dark:text-white absolute text-gray-500 dark:text-color-910 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#FF6464] peer-focus:dark:text-[#FF6464] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
                htmlFor=""
              >
                Message*
              </label>
            </div>
            <input
            value={'Send'}
              type="submit"
              className="px-6 py-2 rounded-lg text-[#0466c8] border-[2px] mt-3 border-[#0466c8] font-semibold cursor-pointer hover:bg-[#0466c8]  hover:text-white transition-colors duration-300 ease-in-out hover:border-transparent"
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
