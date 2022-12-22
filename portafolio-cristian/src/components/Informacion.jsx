function Informacion() {
  return (
    <div className="bg-white flex items-center flex-col py-8 w-full">
      <img
        className="h-60 w-60 rounded-3xl shadow-xl"
        src="https://www.creartuavatar.com/images/m7.svg"
        alt="dwd"
      />
      <h2 className="mt-6 mb-1 text-[26px] font-semibold">
        Cristian Velasquez
      </h2>
      <h3 className="text-center mb-4 text-gray-500 inline-block px-5 py-1.5 text-[16px]">
        Industrial Engineer / Data-Analyst / Front-end Developer Jr
      </h3>
      <div className="flex justify-center space-x-3">
        <a className="h-10 w-10 bg-pink-500 rounded-lg" href=""></a>
        <a className="h-10 w-10 bg-pink-500 rounded-lg" href=""></a>
        <a className="h-10 w-10 bg-pink-500 rounded-lg" href=""></a>
      </div>
      <div className="p-7 rounded-2xl mt-7 bg-gray-100 w-[90%]">
        <div className="flex border-b border-gray-400 pb-2.5">
          <span className="bg-red-500 h-10 w-10">
            <i>AVP</i>
          </span>
          <div className="text-left ml-2.5 ">
            <p className="text-xs text-gray-500">Phone</p>
            <p>+57 3212382606</p>
          </div>
        </div>
        <div className="flex border-b border-gray-400 py-2.5">
          <span className="bg-red-500 h-10 w-10">
            <i>AVP</i>
          </span>
          <div className="text-left ml-2.5">
            <p className="text-xs text-gray-500">Email</p>
            <p>cristiancavelasquez@gmail.com</p>
          </div>
        </div>
        <div className="flex border-b border-gray-400 py-2.5">
          <span className="bg-red-500 h-10 w-10">
            <i>AVP</i>
          </span>
          <div className="text-left ml-2.5">
            <p className="text-xs text-gray-500">Location</p>
            <p>Bogotá, Colombia</p>
          </div>
        </div>
        <div className="flex py-2.5">
          <span className="bg-red-500 h-10 w-10">
            <i>AVP</i>
          </span>
          <div className="text-left ml-2.5">
            <p className="text-xs text-gray-500">Birthday</p>
            <p>Nov 05, 1999</p>
          </div>
        </div>
      </div>
      <button className="flex mt-5 items-center text-white bg-gradient-to-br from-pink-700 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-full text-lg px-5 py-2.5 text-center mr-2">
        <img className="mr-3"
          src="https://bostamihtml.ibthemespro.com/images/icons/dowanload.png"
          alt="iconoDown"
        />
        Download CV
      </button>
    </div>
  );
}

export default Informacion;
