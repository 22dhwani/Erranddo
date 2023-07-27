import { useLead } from "../../../store/pro/lead-context";
import LeadsListItem from "./LeadsListItem";

function LeadsList() {
  const { leads } = useLead();

  const min = new Date().getMinutes();

  // Ensure leads and created_at are defined before using them
  const filteredLeads = leads?.filter((item) => item?.is_outright === 0);
  return (
    <div className="flex flex-col gap-3 ">
      {filteredLeads &&
        filteredLeads.map((item) => {
          const answers = item?.user_request?.answers.map(
            (answerItem) => answerItem.answer
          );

          const createdAt = item?.created_at ? new Date(item.created_at) : null;
          return (
            <LeadsListItem
              time={`${min - (createdAt?.getMinutes() || 0)} min`}
              title={item?.user_bussiness?.user?.full_name}
              business={`${item.user_bussiness.name} `}
              service={`${item.user_bussiness.name} `}
              answers={answers}
              location={`${item?.user_bussiness?.user?.city}, ${item?.user_bussiness?.user?.postcode_id}`}
              mincredits={6}
              maxcredits={3}
              id={item?.id}
            />
          );
        })}
    </div>
  );
}

export default LeadsList;
