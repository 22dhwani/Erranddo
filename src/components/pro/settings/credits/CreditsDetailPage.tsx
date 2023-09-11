import CreditsDetailItemSection from "./CreditsDetailItemSection";
import Heading from "../../../UI/Heading";
import Input from "../../../UI/Input";
import Button from "../../../UI/Button";

function CreditsDetailPage() {
  return (
    <div>
      <div className=" tracking-wider px-5 py-2">
        <Heading
          variant="headingTitle"
          text={"Available Credits : 22"}
          headingclassname="!text-xl"
        />
      </div>
      <div className="grid xl:grid-cols-3 xs:grid-cols-1 md:grid-cols-2 gap-6">
        <CreditsDetailItemSection
          creditscore={16}
          amount={23}
          perCreditAmount={23.45}
          percentage={"0.1%"}
        />
        <CreditsDetailItemSection
          creditscore={10}
          amount={9}
          perCreditAmount={23.45}
          percentage={"10%"}
        />
        <CreditsDetailItemSection
          creditscore={23}
          amount={45}
          perCreditAmount={23.45}
          percentage={"4%"}
        />
        <CreditsDetailItemSection
          creditscore={23}
          amount={23}
          perCreditAmount={23.45}
          percentage={"9.3%"}
        />
        <CreditsDetailItemSection
          creditscore={34}
          amount={54}
          perCreditAmount={23.45}
          percentage={"60%"}
        />
        <CreditsDetailItemSection
          creditscore={75}
          amount={2}
          perCreditAmount={23.45}
          percentage={"1%"}
        />
      </div>
      <div className="py-10 px-5 flex gap-3 items-center">
        <Input
          placeholder="Have a promo code?"
          type="text"
          className="bg-slate-200 xs:w-64"
        />
        <Button buttonClassName="h-10 w-20">Enter</Button>
      </div>
    </div>
  );
}

export default CreditsDetailPage;
