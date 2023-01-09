import rx from '../img/rx.jpg'

function GridPortfolioComp(props) {
  return (
    <div className="rounded-lg bg-white shadow-lg dark:bg-[#303030] p-6">
    <div className="overflow-hidden rounded-lg shadow-lg">
      <a onClick={props.toggleMenuModal}>
        <img
          className=" w-full cursor-pointer transition duration-200 ease-in-out transform hover:scale-110 rounded-lg h-auto"
          src={props.picture}
          alt=""
          id="lola"
        />
      </a>
    </div>
    <span className="pt-5 text-[14px] dark:text-[#fca311] font-normal text-gray-500 block">
      {props.area}
    </span>
    <h2 className="font-medium cursor-pointer text-lg duration-300 transition hover:text-orange-400 mt-2">
      <a className="dark:text-white" onClick={props.toggleMenuModal} >{props.titulo}</a>
    </h2>
  </div>
  )
}

export default GridPortfolioComp