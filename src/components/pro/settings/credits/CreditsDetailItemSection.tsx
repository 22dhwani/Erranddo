import CreditsCard from "./CreditsCard";
import Outright from "../../../../assets/outrightcredits.svg";
import Heading from "../../../UI/Heading";

function CreditsDetailItemSection(props: {
  creditscore: number;
  amount: number;
  perCreditAmount: number;
  percentage: string;
}) {
  return (
    <div>
      <CreditsCard
        children={
          <div>
            <div className="relative">
              <div className="absolute top-0 right-0 transform translate-x-3 -translate-y-3 rotate-45">
                <Heading
                  text={`${props.percentage}`}
                  variant="subTitle"
                  headingclassName="text-white text-md px-1 py-0.5 font-bold"
                />
              </div>
            </div>
            <div className="flex flex-col gap-4 items-center">
              <div className="flex gap-4">
                <div>
                  <img src={Outright} />
                </div>
                <Heading
                  variant="headingTitle"
                  headingclassName="w-auto dark:text-darktextColor"
                  text={"Credits"}
                />
              </div>
              <div className="flex felx-wrap gap-3">
                <Heading
                  variant="headingTitle"
                  headingclassName="w-auto dark:text-darktextColor"
                  text={`${props.creditscore} Credits`}
                />
                <Heading
                  variant="headingTitle"
                  headingclassName="w-auto dark:text-darktextColor"
                  text={"-"}
                />
                <Heading
                  variant="headingTitle"
                  headingclassName="w-auto dark:text-darktextColor"
                  text={`$${props.amount}`}
                />
              </div>
              <div className="flex gap-3">
                <Heading
                  variant="smallTitle"
                  headingclassName="w-auto dark:text-darktextColor"
                  text={"1 Credit "}
                />
                <Heading
                  variant="smallTitle"
                  headingclassName="w-auto dark:text-darktextColor"
                  text={"/"}
                />
                <Heading
                  variant="smallTitle"
                  headingclassName="w-auto dark:text-darktextColor"
                  text={`£${props.perCreditAmount}`}
                />
              </div>
            </div>
          </div>
        }
      />
      <div className="flex justify-center">
        <button className="bg-primaryBlue hover:bg-blue-700 text-white font-bold py-2 px-4  rounded">
          Buy Now
        </button>
      </div>
    </div>
  );
}

export default CreditsDetailItemSection;
