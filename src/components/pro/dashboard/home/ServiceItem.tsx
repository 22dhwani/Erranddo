import HomeCard from "./HomeCard";
import Location from "../../../../assets/LocationIcon.tsx";

import Edit from "../../../../assets/edit.svg";
import Heading from "../../../UI/Heading";
import { useTheme } from "../../../../store/theme-context.tsx";
import { useState } from "react";
import EditServiceModal from "../../../../layout/pro-models/EditServiceModal.tsx";

function ServiceItem(props: {
  serviceId: number;
  title: string;
  business: string;

  locationOne?: string;
  locationTwo?: string;
  ratingCount: number;
  progress: string;
  leads: number;
  purchases: number;
}) {
  const { theme } = useTheme();
  const [openEditModal, setOpenEditModal] = useState(false);
  console.log(props.serviceId);
  return (
    <>
      {openEditModal && (
        <EditServiceModal
          onCancel={() => setOpenEditModal(false)}
          serviceId={props?.serviceId}
        />
      )}
      <HomeCard
        className="px-4 py-5"
        children={
          <div>
            <div className="flex justify-between items-center ">
              <div className="flex flex-col  ">
                <Heading
                  text={props.title}
                  variant="subTitle"
                  headingclassName="!font-bold  tracking-wide dark:text-white"
                />
                <Heading
                  text={props.business}
                  variant="subTitle"
                  headingclassName="!font-medium text-primaryYellow tracking-wide text-sm "
                />
              </div>
              <div className=" hover:bg-slate-100 dark:hover:bg-slate-700 w-10 h-10 flex items-center justify-center rounded-full">
                <button onClick={() => setOpenEditModal(true)}>
                  <img src={Edit} />
                </button>
              </div>
            </div>
            <div className="flex items-center gap-2">
              {theme === "light" && (
                <div children={<Location color="black" />} />
              )}

              {theme === "dark" && (
                <div children={<Location color="white" />} />
              )}
              <Heading
                text={props.locationOne}
                variant="subHeader"
                headingclassName="!font-semibold my-2 !text-sm text-slate-600 tracking-wide  dark:text-slate-400 "
              />
            </div>

            <div className="flex items-center gap-2 mb-5">
              {theme === "light" && (
                <div children={<Location color="black" />} />
              )}

              {theme === "dark" && (
                <div children={<Location color="white" />} />
              )}
              <Heading
                text={props.locationTwo}
                variant="subHeader"
                headingclassName="!font-semibold my-2 !text-sm text-slate-600 tracking-wide  dark:text-slate-400 "
              />
            </div>
            <hr className="text-slate-500"></hr>
            <div className="flex justify-between mt-5 gap-2">
              <div className="flex flex-col">
                <Heading
                  text={`Leads Posted Today`}
                  variant="subHeader"
                  headingclassName="text-textColor !font-light tracking-wide text-sm  dark:text-slate-400"
                />
                <Heading
                  text={`02`}
                  variant="subHeader"
                  headingclassName="text-primaryYellow !font-semibold tracking-wide text-sm  dark:text-slate-400"
                />
              </div>
              <div className="flex flex-col">
                <Heading
                  text={`My Purchases`}
                  variant="subHeader"
                  headingclassName="text-textColor !font-light tracking-wide text-sm  dark:text-slate-400"
                />
                <Heading
                  text={`${props.purchases}`}
                  variant="subHeader"
                  headingclassName="text-primaryBlue !font-semibold tracking-wide text-sm  dark:text-slate-400"
                />
              </div>
            </div>
          </div>
        }
      />
    </>
  );
}

export default ServiceItem;
