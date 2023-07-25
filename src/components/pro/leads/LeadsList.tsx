import { useLead } from "../../../store/pro/lead-context";
import LeadsListItem from "./LeadsListItem";

function LeadsList() {
  const { leads } = useLead();
  console.log(leads, "leadsss");

  const min = new Date().getMinutes();
  console.log(leads);

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
              subTitle={[
                "TV Installation",
                "TV Wall Mounting",
                " CCTV Installation",
              ]}
              answers={answers}
              location={`${item?.user_bussiness?.user?.city}, ${item?.user_bussiness?.user?.postcode_id}`}
              mincredits={6}
              maxcredits={3}
            />
          );
        })}
    </div>
  );
}

export default LeadsList;
