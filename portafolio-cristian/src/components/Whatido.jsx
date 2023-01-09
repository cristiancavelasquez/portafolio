import { GrReactjs } from "react-icons/gr";

function Whatido() {
  return (
    <div className="mt-4 grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-2">
      <div className=" dark:text-[#4285F4] border dark:border-none border-[#4285F4] dark:hover:border dark:hover:border-[#4285F4] bg-[#FFFAE9] dark:bg-[#303030] flex gap-4 rounded-2xl p-6">
        <img
          src="https://www.svgrepo.com/show/375529/analytics-hub.svg"
          alt=""
          className="w-10 h-10 object-contain block"
        />
        <div className="space-y-2">
          <h3 className="text-[22px] font-semibold">Data Analysis</h3>
          <p className="leading-8 dark:text-[#EDEEF1] text-gray-600">
            I am specialized in analyzing data. Results, trends and
            recommendations are clearly presented in reports or tools like Power
            BI.
          </p>
        </div>
      </div>

      <div className=" dark:text-[#FFD43B] dark:border-none border-[#FFD43B] border dark:hover:border-[#FFD43B] bg-[#FFFAE9] dark:bg-[#303030] flex gap-4 rounded-2xl p-6">
        <img
          src="https://www.svgrepo.com/show/452091/python.svg"
          alt=""
          className="w-10 h-10 object-contain block"
        />
        <div className="space-y-2">
          <h3 className="text-[22px] font-semibold">Data Analytics</h3>
          <p className="leading-8 dark:text-[#EDEEF1] text-gray-600">
            Get more value from your data with prediction models and machine
            learning techniques, for example by predicting behavior or targeting
            the right customer.
          </p>
        </div>
      </div>
      <div className="bg-[#FFFAE9] dark:border-none  border-[#FFE873] border dark:text-[#FFE873] dark:hover:border dark:hover:border-[#FFE873] dark:bg-[#303030] flex gap-4 rounded-2xl p-6">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg"
          alt=""
          className="w-10 h-10 object-contain block"
        />
        <div className="space-y-2">
          <h3 className="text-[22px]  font-semibold">Dasboards</h3>
          <p className="leading-8 text-gray-600 dark:text-[#EDEEF1]">
            Dashboards show the most recent results in an interactive way. By
            clicking and drilling, you will examine trends and patterns yourself
            with tools like Power BI.
          </p>
        </div>
      </div>
      <div className="bg-[#FFFAE9] dark:border-none border-[#61DBFB] border dark:text-[#61DBFB] dark:hover:border dark:hover:border-[#61DBFB] dark:bg-[#303030] flex gap-4 rounded-2xl p-6">
        <img
          src="https://www.svgrepo.com/show/452092/react.svg"
          alt=""
          className="w-10 h-10 object-contain block fill-blue-500"
        />
        <div className="space-y-2">
          <h3 className="text-[22px] font-semibold">
            Front-end web development
          </h3>
          <p className="leading-8 dark:text-[#EDEEF1] text-gray-600">
            As a web developer, I design and create static websites
            and CRUD web apps. The websites are optimized for desktop
            and smartphone.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Whatido;
