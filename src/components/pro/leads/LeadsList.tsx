import { useLead } from "../../../store/pro/lead-context";
import LeadsListItem from "./LeadsListItem";

function LeadsList() {
  const { leads, handleNextPage, handlePrevPage } = useLead();

  const min = new Date().getMinutes();

  return (
    <div className="flex flex-col gap-3 ">
      {leads && leads?.length > 0 ? (
        leads.map((item) => {
          const answers = item?.answers.map((answerItem) => answerItem.answer);

          const createdAt = item?.created_at ? new Date(item.created_at) : null;
          return (
            <LeadsListItem
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
        <div className="justify-center items-center flex font-semibold text-red-600 h-10">
          There are no leads
        </div>
      )}
    </div>
  );
}

export default LeadsList;
