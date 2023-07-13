import { Business } from "../../../../models/customer/businesslist";
import Button from "../../../UI/Button";
import DropdownCompoenet from "../../../UI/Dropdown";
import Heading from "../../../UI/Heading";
import FilterSectionSkeleton from "../skeleton/FilterSectionSkeleton";

function FilterSection(props: { list: any[]; onChange: (sort: string) => void }) {
  const dropDownOne = [
    "Highest reviews",
    "Distance",
    "Response time",
    "Registration date",
    "Highest overall score",
  ];
  const dataList = props?.list;
  const businessList: Business[] = [];
  for (let i = 0; i < dataList.length; i++) {
    dataList[i]?.map((d: Business) => businessList.push(d));
  }
  const sectionClassName =
    "lg:flex-row flex xs:flex-col lg:items-center xs:items-start gap-2 active:border-b active:border-b-primaryBlue hover:border-b-[3px] hover:border-b-primaryBlue lg:w-fit xs:w-3/6 h-full xs:py-2 lg:py-0 ";
  const headingClassName =
    "text-textColor !font-normal tracking-wide active:text-primaryBlue hover:text-primaryBlue dark:text-darktextColor";

  const isLoading = false;
  return (
    <div>
      {isLoading ? (
        <FilterSectionSkeleton />
      ) : (
        <div className="lg:flex-row xs:flex-col flex  lg:items-center xs:items-start justify-between box-border xs:py-4 lg:py-0 border-y-[0.5px] border-y-slate-300 my-10 xs:gap-3 lg:gap-0">
          <div className="flex lg:gap-10 lg:flex-row xs:flex-col lg:items-center xs:items-start xs:gap-3 lg:w-max xs:w-full">
            <Heading
              text={"Matched Pros"}
              variant="subHeader"
              headingclassName="text-primaryYellow !font-bold tracking-wide "
            />
            <div className="lg:!h-16  xs:h-max flex gap-7 justify-between lg:w-max xs:w-full">
              <div className={sectionClassName}>
                <Heading
                  text={"All"}
                  variant="subHeader"
                  headingclassName={headingClassName}
                />
                <Button
                  children={
                    businessList?.length < 10
                      ? "0" + businessList?.length
                      : businessList?.length
                  }
                  size="normal"
                  centerClassName="flex justify-center"
                  buttonClassName=" hover:bg-transparent active:bg-transparent !py-2 xs:w-full dark:text-darktextColor"
                  variant="outlined"
                ></Button>
              </div>
              <div className={sectionClassName}>
                <Heading
                  text={"Response"}
                  variant="subHeader"
                  headingclassName={headingClassName}
                />
                <Button
                  children="02"
                  centerClassName="flex justify-center"
                  buttonClassName=" hover:bg-transparent active:bg-transparent border-textColor hover:border-primaryBlue  !py-2 xs:w-full dark:text-darktextColor"
                  variant="outlined"
                ></Button>
              </div>
            </div>
            <Button
              variant="filled"
              color="primary"
              size="normal"
              children="Show Interest to all"
              centerClassName="flex items-center justify-center"
              buttonClassName="!px-4  text-sm tracking-wide xs:w-full lg:w-max py-[0.7rem]"
            />
          </div>
          <div className="lg:ml-auto xs:w-full lg:w-44">
            <DropdownCompoenet
              placeholder="Sort By"
              options={dropDownOne}
              onChange={(newValue) => {
                props.onChange(newValue?.value)
              }}
              className=""
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default FilterSection;
