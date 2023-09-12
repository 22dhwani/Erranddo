import { useState } from "react";
import DealerContactSkeleton from "../../../pro/skeleton/Dealer/DealerContactSkeleton";
import Heading from "../../../UI/Heading";
function ContactBar(props: {
  website?: string;
  phone_number?: string;
  instagram?: string;
  facebook?: string;
  email?: string;
  twitter?: string;
}) {
  const isLoading = false;

  return (
    <div>
      {isLoading ? (
        <DealerContactSkeleton />
      ) : (
        <div className="lg:flex-col xs:flex-col flex xs:items-start justify-between box-border border-b-2 py-5 lg:gap-0 my-4 px-5">
          <div className="flex lg:gap-10 flex-row  lg:items-center xs:items-start xs:gap-3  xs:w-full justify-between">
            <Heading
              text={"Contact Details"}
              variant="subHeader"
              headingclassname="text-primaryYellow !font-semibold tracking-wide "
            />
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
                  headingclassname="text-textColor text-center dark:text-white"
                  text={`No contact detail`}
                  variant="subTitle"
                />
              </div>
            ) : (
              <div>
                {props.phone_number && (
                  <Heading
                    headingclassname="text-textColor dark:text-white font-semibold"
                    text={
                      <div className="flex gap-2">
                        <span className="font-semibold text-textColor dark:text-white">
                          Phone Number :
                        </span>
                        <span>{props.phone_number ?? " No Number "}</span>
                      </div>
                    }
                    variant="subHeader"
                  />
                )}
                {props.website && (
                  <Heading
                    headingclassname="text-textColor dark:text-white font-semibold"
                    text={
                      <div className="flex gap-2">
                        <span className="font-semibold text-textColor dark:text-white">
                          Website :
                        </span>
                        <span>{props.website ?? " No Website "}</span>
                      </div>
                    }
                    variant="subHeader"
                  />
                )}
                {props.email && (
                  <Heading
                    headingclassname="text-textColor dark:text-white font-semibold"
                    text={
                      <div className="flex gap-2">
                        <span className="font-semibold text-textColor dark:text-white">
                          Email :
                        </span>
                        <span>{props.email ?? " No email "}</span>
                      </div>
                    }
                    variant="subHeader"
                  />
                )}
                {props.facebook && (
                  <Heading
                    headingclassname="text-textColor dark:text-white font-semibold"
                    text={
                      <div className="flex gap-2">
                        <span className="font-semibold text-textColor dark:text-white">
                          Facebook :
                        </span>
                        <span>{props.facebook ?? " No facebook "}</span>
                      </div>
                    }
                    variant="subHeader"
                  />
                )}
                {props.instagram && (
                  <Heading
                    headingclassname="text-textColor dark:text-white font-semibold"
                    text={
                      <div className="flex gap-2">
                        <span className="font-semibold text-textColor dark:text-white">
                          Instagram :
                        </span>
                        <span>{props.instagram ?? " No instagram "}</span>
                      </div>
                    }
                    variant="subHeader"
                  />
                )}
                {props.twitter && (
                  <Heading
                    headingclassname="text-textColor dark:text-white font-semibold"
                    text={
                      <div className="flex gap-2">
                        <span className="font-semibold text-textColor dark:text-white">
                          Twitter :
                        </span>
                        <span>{props.twitter ?? " No twitter "}</span>
                      </div>
                    }
                    variant="subHeader"
                  />
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default ContactBar;
