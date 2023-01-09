import Informacion from "../components/Informacion";
import Modal from "../components/Modal";
import Modal2 from "../components/Modal2";
import { useState } from "react";
import GridPortfolioComp from "../components/GridPortfolioComp";
import rx from '../img/rx.jpg'
import crud from '../img/crud.png'

function Works() {
  
  const proyecto1 = {
    titulo: "Medical Prescription Dashboard",
    area: "Data Analysis",
    project: "Dashboard",
    company: "Close Up International",
    tools: "Power BI, Power Query and Microsoft Excel.",
    preview: "Click here !",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia placeat magnam possimus iusto blanditiis pariatur labore explicabo quo repellat hic dolorum numquam asperiores, voluptatum fugiat reiciendis aspernatur, non, odio aperiam voluptas ex tempora vitae. Dolor, consequatur quidem! Quas magni distinctio dolorum dolore natus, vel numquam accusamus. Nostrum eligendi recusandae qui tempore deserunt!",
    picture: 'ded',
  };
  const proyecto2 = {
    titulo: "CRUD Web App",
    area: "Web Development",
    project: "Web Development",
    company: "Close Up International",
    tools: "JavaScript, React, AWS, Express and Tailwind css. ",
    preview: "www.facebook.com",
    description:
      "xxxxxxx ipsum dolor sit amet consectetur, adipisicing elit. Mollitia placeat magnam possimus iusto blanditiis pariatur labore explicabo quo repellat hic dolorum numquam asperiores, voluptatum fugiat reiciendis aspernatur, non, odio aperiam voluptas ex tempora vitae. Dolor, consequatur quidem! Quas magni distinctio dolorum dolore natus, vel numquam accusamus. Nostrum eligendi recusandae qui tempore deserunt!",
    picture:
      "https://bostamihtml.ibthemespro.com/images/work_images/small/1.jpg",
  };

  const [isOpenModal, setIsOpenModal] = useState(false);

  const toggleMenuModal = () => {
    setIsOpenModal(!isOpenModal);
  };
  const [isOpenModal2, setIsOpenModal2] = useState(false);

  const toggleMenuModal2 = () => {
    setIsOpenModal2(!isOpenModal2);
  };

  return (
    <div className="lg:grid lg:grid-cols-6 lg:mt-12 lg:gap-10 lg:px-10 lg:pb-8">
      <div className="hidden lg:col-span-2 lg:inline">
        <Informacion />
      </div>
      <div className="rounded-3xl pb-8 px-2 col-span-4 lg:dark:bg-[#1A1A1A] lg:bg-[#fffcf2] shadow-lg">
        <h1 className="text-[40px] dark:text-white font-bold mt-10 mb-6 lg:hidden">
          Portfolio{" "}
        </h1>
        <div className="lg:flex items-center px-2 hidden mb-6">
          <h1 className="text-[40px] px-1 dark:text-white font-bold mr-3 ">Portfolio</h1>
          <div className="bg-[#0466c8] h-[2px] rounded-full w-[30%]"></div>
        </div>
        <div className="grid  grid-cols-1 gap-y-6 gap-x-5 md:grid-cols-2 lg:grid-cols-2">
          <GridPortfolioComp
            toggleMenuModal={toggleMenuModal}
            titulo={proyecto1.titulo}
            area={proyecto1.area}
            picture= {rx}
          />
          <GridPortfolioComp
            toggleMenuModal={toggleMenuModal2}
            titulo={proyecto2.titulo}
            area={proyecto2.area}
            picture= {crud}
          />

        </div>
      </div>
      <Modal
        active={isOpenModal}
        toggleMenuModal={toggleMenuModal}
        titulo={proyecto1.titulo}
        project={proyecto1.project}
        company={proyecto1.company}
        tools={proyecto1.tools}
        preview={proyecto1.preview}
        picture={proyecto1.picture}
        description={proyecto1.description}
      />
      <Modal2
        active={isOpenModal2}
        toggleMenuModal2={toggleMenuModal2}
        titulo={proyecto2.titulo}
        project={proyecto2.project}
        company={proyecto2.company}
        tools={proyecto2.tools}
        preview={proyecto2.preview}
        picture={proyecto2.picture}
        description={proyecto2.description}
      />
    </div>
  );
}

export default Works;
