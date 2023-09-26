import { useState } from "react";
import Heading from "../../../UI/Heading";
import GoldStar from "../../../../assets/GoldStar.svg";
import Star from "../../../../assets/Star.svg";
import Button from "../../../UI/Button";
import { useTheme } from "../../../../store/theme-context";
import LocationIcon from "../../../../assets/LocationIcon";
import { useNavigate, useParams } from "react-router-dom";
import { Service } from "../../../../models/home";
import ShowInterestModal from "../../../../layout/customer/ShowInterestModal";
import NoImage from "../../../../assets/no-photo.png";

function DangerousHTML({
  dangerouslySetInnerHTML,
}: {
  dangerouslySetInnerHTML: { __html: string };
}) {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `<span class="text-gray-500  !font-normal tracking-wide !text-xs dark:text-darktextColor break-words ">${dangerouslySetInnerHTML.__html}</span>`,
      }}
    />
  );
}

function ServiceCard(props: any) {
  const { theme } = useTheme();
  const navigate = useNavigate();
  const [showFullDescription, setShowFullDescription] = useState(false);

  const handleClick = () => {
    setShowFullDescription(!showFullDescription);
  };

  const getDescription = () => {
    if (showFullDescription) {
      return props.description;
    } else {
      return props.description.substring(0, 90);
    }
  };

  const isLongDescription = props.description.length > 100;
  console.log(props.isClientNotInterested);
  const [showModal, setShowModal] = useState(false);
  const requestId = useParams();

  const disableEmailsAndLinks = (text: any) => {
    const emailRegex = /\S+@\S+\.\S+/g;
    const urlRegex = /(?:https?|ftp):\/\/[\n\S]+|www\.[\S]+\.[a-z]+/g;
    const phoneRegex = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/g;
    const blurredText = text.replace(
      emailRegex,
      '<span class="blur-text">$&</span>'
    );
    const blurredAndLinkedText = blurredText.replace(
      urlRegex,
      '<span class="blur-text">$&</span>'
    );
    const finalText = blurredAndLinkedText.replace(
      phoneRegex,
      '<span class="blur-text">$1$2$3$4</span>'
    );
    return finalText;
  };

  const requestQuote = props?.quote?.find(
    (d: any) => d?.user_request_id == requestId?.id
  );

  return (
    <div>
      {showModal && (
        <ShowInterestModal
          onCancel={() => {
            setShowModal(false);
          }}
          id={props.id}
          serviceName={props.serviceName}
          serviceId={props.serviceId}
        />
      )}
      <div className="flex flex-col h-full relative">
        {props.isClientNotInterested && (
          <h1 className="absolute z-[900] top-[40%]  text-red-500 text-center mx-auto w-full font-semibold">
            Pro member is not available to help.
          </h1>
        )}
        <div
          className={`bg-white box-shadow-lg drop-shadow-[0_15px_20px_rgba(0,0,0,0.15)] py-5 px-5 rounded-md flex flex-col dark:bg-dimGray flex-grow cursor-pointer ${
            props.isClientNotInterested &&
            "blur-sm  relative !cursor-not-allowed"
          }`}
        >
          <div
            className="flex gap-2 flex-nowrap"
            onClick={() =>
              !props.isClientNotInterested &&
              navigate(`/services/dealer-detail/${props?.id}`, {
                state: {
                  serviceName: props.serviceName,
                  serviceId: props.serviceId,
                  isInterested: props?.isInterested,
                  userRequestId: requestId?.id,
                  distance: props?.location,
                },
              })
            }
          >
            <div className="w-16 h-16">
              {props.icon ? (
                <img
                  src={`https://erranddo.kodecreators.com/storage/${props?.icon}`}
                  className="w-full h-full rounded-full object-cover"
                />
              ) : (
                <img
                  src={NoImage}
                  className="h-full w-full  rounded-full object-cover"
                />
              )}
            </div>
            <div className="flex flex-col gap-1.5 flex-wrap w-fit min-w-min">
              <div className="cursor-pointer">
                <Heading
                  text={props.title}
                  variant="subTitle"
                  headingclassname="text-textColor !font-bold tracking-wide text-md dark:text-darktextColor break-words capitalize"
                />
              </div>
              <div className="flex flex-wrap gap-1">
                {props?.subTitle?.map((item: Service, index: number) => {
                  return (
                    <Heading
                      key={index}
                      text={
                        " " +
                        item.name.replace(".", "") +
                        (index !== props.subTitle.length - 1 ? ", " : "")
                      }
                      variant=" "
                      headingclassname="text-textColor !font-semibold tracking-wide !text-xs dark:text-slate-400"
                    />
                  );
                })}
              </div>
            </div>
          </div>
          <div className="my-5">
            {props?.quote?.length > 0 && (
              <div
                className="flex gap-1 items-center "
                onClick={() =>
                  !props.isClientNotInterested &&
                  navigate(`/services/dealer-detail/${props?.id}`, {
                    state: {
                      serviceName: props.serviceName,
                      serviceId: props.serviceId,
                      isInterested: props?.isInterested,
                      userRequestId: requestId?.id,
                      distance: props?.location,
                    },
                  })
                }
              >
                <Heading
                  text="Quote:"
                  variant="subTitle"
                  headingclassname="text-primaryYellow !font-semibold tracking-wide !text-xs dark:text-darkprimaryYellow"
                />
                <div className="flex gap-1 items-center">
                  <p className="text-primaryYellow font-bold ">£</p>
                  <Heading
                    text={requestQuote?.quote}
                    variant="subTitle"
                    headingclassname="text-primaryYellow !font-semibold tracking-wide !text-xs dark:text-darkprimaryYellow"
                  />
                  <Heading
                    text={requestQuote?.payment_type.replace("_", " ")}
                    variant="subTitle"
                    headingclassname="text-primaryYellow !font-semibold tracking-wide !text-xs dark:text-darkprimaryYellow"
                  />
                </div>
                {/* <div>{props?.quote[0]?.quote}</div> */}
                {/* <div>{props?.quote[0]?.payment_type.replace("_", " ")}</div> */}
              </div>
            )}
            <DangerousHTML
              dangerouslySetInnerHTML={{
                __html: disableEmailsAndLinks(getDescription()),
              }}
            />
            {isLongDescription && (
              <button
                className="text-primaryBlue hover:underline text-sm"
                onClick={handleClick}
              >
                {showFullDescription ? "read less..." : "...read more"}
              </button>
            )}
          </div>
          <div
            onClick={() =>
              !props.isClientNotInterested &&
              navigate(`/services/dealer-detail/${props?.id}`, {
                state: {
                  serviceName: props.serviceName,
                  serviceId: props.serviceId,
                  isInterested: props?.isInterested,
                  userRequestId: requestId?.id,
                  distance: props?.location,
                },
              })
            }
            className=" flex gap-1 text-gray-500 !font-normal tracking-wide !text-xs dark:text-darktextColor"
          >
            {Array.from({ length: props.ratingCount }, () => (
              <img src={GoldStar} alt="Gold Star" />
            ))}
            {Array.from({ length: 5 - props.ratingCount }, () => (
              <img src={Star} alt="Star" />
            ))}
            <Heading
              text={`${props.ratingCount ?? 0} of 5 / 120`}
              variant="subHeader"
              headingclassname="text-gray-500 !font-normal tracking-wide !text-xs mx-2 dark:text-slate-400"
            />
          </div>
          <div className="mt-5 flex gap-2 items-center">
            {theme === "light" && (
              <div children={<LocationIcon color="black" />} />
            )}
            {theme === "dark" && (
              <div children={<LocationIcon color="white" />} />
            )}
            <Heading
              text={`${props.location} miles away`}
              variant="subHeader"
              headingclassname="text-textColor !font-semibold tracking-wide !text-xs dark:text-darktextColor"
            />
          </div>
        </div>
        <div className="my-5">
          {props.isInterested ? (
            <div>
              {props.isResponded ? (
                <Button
                  variant="filled"
                  color="primary"
                  size="normal"
                  children="Messages"
                  centerClassName="flex items-center justify-center"
                  buttonClassName="!px-4  text-sm tracking-wide w-full py-[0.7rem] "
                />
              ) : (
                <Button
                  variant="filled"
                  size="normal"
                  children="Shown Interest"
                  centerClassName="flex items-center justify-center"
                  buttonClassName="!px-4  text-sm tracking-wide w-full py-[0.7rem] bg-slate-400 cursor-not-allowed hover:bg-slate-400"
                />
              )}
            </div>
          ) : (
            <div>
              {props.isResponded ? (
                <Button
                  disabled={props.isClientNotInterested}
                  variant="filled"
                  color="primary"
                  size="normal"
                  children="Messages"
                  centerClassName="flex items-center justify-center"
                  buttonClassName="!px-4  text-sm tracking-wide w-full py-[0.7rem] disabled:bg-slate-400 disabled:text-white"
                />
              ) : (
                <Button
                  disabled={props.isClientNotInterested}
                  onClick={() => setShowModal(!showModal)}
                  color="primary"
                  size="normal"
                  children="Show Interest"
                  centerClassName="flex items-center justify-center"
                  buttonClassName="!px-4  border-0 text-sm tracking-wide w-full py-[0.7rem] disabled:bg-slate-400 disabled:text-white"
                />
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ServiceCard;
