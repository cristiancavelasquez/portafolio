import {
  FaProjectDiagram,
  FaExternalLinkAlt,
  FaToolbox,
  FaBuilding
} from "react-icons/fa";

function Modal2(props) {
  return (
    <div className={`${props.active ? "block" : "hidden"} " bg-black bg-opacity-70 fixed inset-0 z-20 backdrop-blur-sm"`}>
    <div className="flex h-screen justify-center items-center">
      <div className="flex-col justify-center bg-white py-8 px-4 relative rounded-xl w-full h-2/3 lg:h-[90%] md:h-2/3 lg:w-[58%] md:w-4/5">
        <button onClick={props.toggleMenuModal2} className="bg-black text-white rounded-full h-12 font-bold w-12 border-2 border-gray-300 absolute -top-12 right-0 lg:-top-6 lg:-right-6">
          X
        </button>
        <div className="overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-300 max-h-[60vh] lg:max-h-[80vh]">
          <h2 className="text-[#0466c8] text-2xl text-center font-bold">
            {props.titulo}
          </h2>
          <div className="grid grid-cols-1 lg:space-x-5 lg:grid-cols-2 my-6 pr-3">
              <div className="space-y-2">
                <p className="flex items-center text-[15px] sm:text-lg font-medium">
                  <i className='mr-2'><FaProjectDiagram className="text-[#0466c8]" /></i> Project: <span className="font-normal ml-1">{props.project}</span>
                </p>
                <p className="flex items-center text-[15px] sm:text-lg font-medium">
                  <i className='mr-2'><FaToolbox className="text-[#0466c8]" /></i>Tools:<span className="font-normal ml-1">{props.tools}</span>
                </p>
              </div>
              <div className="space-y-2">
                <p className="flex items-center text-[15px] sm:text-lg font-medium">
                  <i className='mr-2'><FaBuilding className="text-[#0466c8]" /></i>Company:<span className="font-normal ml-1">{props.company}</span>
                </p>
                <p className="flex items-center text-[15px] sm:text-lg font-medium">
                  <i className='mr-2'><FaExternalLinkAlt className="text-[#0466c8]" /></i>Preview:<span className="font-normal ml-1">{props.preview}</span>
                </p>
              </div>
            </div>
          <p className="font-normal text-md">
          {props.description}
          </p>
          <div className="pr-3">
            <img
              className="w-full md:h-[450px] h-auto object-cover rounded-xl mt-6"
              src={props.picture}
              alt="ddd"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Modal2