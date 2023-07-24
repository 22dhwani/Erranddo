import Heading from "../../../../UI/Heading";
import editicon from "../../../../../assets/edit-2-svgrepo-com.svg";
import HomeCard from "../../home/HomeCard";
import DealerContactSkeleton from "../../../skeleton/Dealer/DealerContactSkeleton";
import ContactModal from "../../../../../layout/pro-models/ContactModal";
import { useState } from "react";
function ContactBar(props: {
  website?: string;
  phone_number?: string;
  instagram?: string;
  facebook?: string;
  email?: string;
  twitter?: string;
}) {
  const [showContactModal, setShowContactModal] = useState(false);
  const isLoading = false;

  return (
    <div>
      {showContactModal && (
        <ContactModal
          onCancel={() => {
            setShowContactModal(false);
          }}
        />
      )}

      {isLoading ? (
        <DealerContactSkeleton />
      ) : (
        <HomeCard>
          <div className="lg:flex-col xs:flex-col flex xs:items-start justify-between box-border py-5 border-slate-300  lg:gap-0 my-4 px-5">
            <div className="flex lg:gap-10 flex-row  lg:items-center xs:items-start xs:gap-3  xs:w-full justify-between">
              <Heading
                text={"Contact Details"}
                variant="subHeader"
                headingclassName="text-primaryYellow !font-semibold tracking-wide "
              />
              <div className="hover:bg-slate-100 dark:hover:bg-slate-700 w-10 h-10 flex items-center justify-center rounded-full ">
                <img
                  onClick={() => {
                    setShowContactModal(!showContactModal);
                  }}
                  src={editicon}
                ></img>
              </div>
            </div>
            <div className="dark:text-white">
              {!props.phone_number &&
              !props.website &&
              !props.facebook &&
              !props.email &&
              !props.instagram &&
              !props.twitter ? (
                <div className="text-center">
                  {" "}
                  <Heading
                    headingclassName="text-textColor text-center dark:text-white"
                    text={`Upload your Contact Details`}
                    variant="subTitle"
                  />
                </div>
              ) : (
                <div>
                  {props.phone_number ?? " No Number "} |{"  "}
                  {props.website ?? " No Website "} |{" "}
                  {props.email ?? " No Email "} |
                  {props.facebook ?? " No Facebook Url "} |{" "}
                  {props.instagram ?? " No Instagram Url "} |{" "}
                  {props.twitter ?? " No Twitter Url"}
                </div>
              )}
            </div>
          </div>
        </HomeCard>
      )}
    </div>
  );
}

export default ContactBar;
