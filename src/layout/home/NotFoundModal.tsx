import Modal from "./Modal";
import NotFoundImage from "../../assets/Group 64@3x.png";
import Close from "../../assets/close.svg";

function NotFoundModal(props: { onCancel: () => void }) {
  return (
    <Modal className="bg-slate-100 opacity-90 rounded-lg xl:w-[570px] md:w-[470px]">
      <button
        className=" absolute top-5 right-5"
        onClick={() => {
          props.onCancel();
        }}
      >
        <img src={Close} alt="" className="md:h-5 md:w-5 xs:h-4 xs:w-4" />
      </button>
      <div className="flex flex-col items-center xl:w-[550px] md:w-[450px] xl:mt-1 md:mt-2 p-3 gap-2">
        <div>
          <img
            src={NotFoundImage}
            alt=""
            className="xl:h-20 xl:w-20 md:h-12 md:w-12 xs:h-12 xs:w-12"
          />
        </div>
        <div className="text-center">
          <h1 className="text-black xl:text-xl md:text-lg xs:text-md font-bold">
            <span className="text-[#DF994F]">Opps</span>, unfortunately we
            haven’t got any Pro’s for this service in your area.
          </h1>
        </div>
        <div className="text-center">
          <h1 className=" xl:text-md text-[#707070] md:text-sm xs:text-xs font-medium p-2">
            Our pool of Pro’s is constantly growing. Please try again later.
          </h1>
        </div>
        <div>
          <button
            type="button"
            className="text-white bg-[#0003FF] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 xl:text-lg md:text-sm rounded-xl xl:h-12 lg:h-10 xs:h-10 md:px-8 xs:px-5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={() => props.onCancel()}
          >
            Close
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default NotFoundModal;
