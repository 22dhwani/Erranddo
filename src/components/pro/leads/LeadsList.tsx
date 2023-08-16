import { useLead } from "../../../store/pro/lead-context";
import TableFooter from "./TableFooter";
import LeadsListItem from "./LeadsListItem";

function LeadsList() {
  const { leads, page, handlePrevPage, handleNextPage, total } = useLead();

  //handling max next page
  const min = new Date().getMinutes();

  return (
    <div className="flex flex-col gap-3 ">
      {leads && leads?.length > 0 ? (
        leads.map((item, key) => {
          const answers = item?.answers.map((answerItem) => answerItem.answer);

          const createdAt = item?.created_at ? new Date(item.created_at) : null;
          return (
            <LeadsListItem
              key={key}
              // time={`${min - (createdAt?.getMinutes() || 0)} min`}
              time={createdAt}
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
              interested={item?.intrests?.length > 0 ? true : false}
            />
          );
        })
      ) : (
        <div className="justify-center items-center flex font-semibold text-textColor h-[64vh] bg-white dark:bg-dimGray dark:text-darktextColor rounded-lg">
          Oops! There are no leads
        </div>
      )}
      {leads && leads?.length > 0 && (
        <TableFooter
          valid={Math.ceil(total / 5) === page ? false : true}
          slice={leads ?? []}
          page={page}
          prev={handlePrevPage}
          next={handleNextPage}
        />
      )}
    </div>
  );
}

export default LeadsList;
