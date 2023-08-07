import { useLead } from "../../../store/pro/lead-context";
import TableFooter from "./TableFooter";
import LeadsListItem from "./LeadsListItem";
import { useEffect } from "react";
import useSWR from "swr";
import { fetcher } from "../../../store/customer/home-context";

let url = "";
const disableNext = (page: number) => {
  url = `https://erranddo.kodecreators.com/api/v1/user-requests?page=${page}&per_page=${5}&for_pro=1`;
};

function LeadsList() {
  const { leads, page, handlePrevPage, handleNextPage, setPage } = useLead();

  const { data } = useSWR(url, fetcher);
  //handling max next page
  let valid = false;
  const datarender = data?.data;
  console.log(url, datarender);
  if (datarender?.length > 0) {
    console.log("aww");
    valid = true;
  } else {
    valid = false;
  }
  const min = new Date().getMinutes();
  useEffect(() => {
    disableNext(page + 1);

    return () => {
      disableNext(0);
    };
  }, [page, valid]);
  return (
    <div className="flex flex-col gap-3 ">
      {leads && leads?.length > 0 ? (
        leads.map((item, key) => {
          const answers = item?.answers.map((answerItem) => answerItem.answer);

          const createdAt = item?.created_at ? new Date(item.created_at) : null;
          return (
            <LeadsListItem
              key={key}
              time={`${min - (createdAt?.getMinutes() || 0)} min`}
              title={item?.user?.full_name}
              business={
                item?.user_bussiness?.name
                  ? `${item.user_bussiness.name}`
                  : "No business"
              }
              service={`${item?.service?.name} `}
              answers={answers.length > 0 ? answers : ["No answers"]}
              location={`${item?.user?.city ?? "--"} , ${
                item?.postcode?.name ?? "--"
              }`}
              mincredits={6}
              maxcredits={3}
              id={item?.id}
            />
          );
        })
      ) : (
        <div className="justify-center items-center flex font-semibold text-textColor h-10">
          Oops! There are no leads
        </div>
      )}
      {leads && leads?.length > 0 && (
        <TableFooter
          valid={valid}
          slice={leads ?? []}
          page={page}
          setPage={setPage}
          prev={handlePrevPage}
          next={handleNextPage}
        />
      )}
    </div>
  );
}

export default LeadsList;
