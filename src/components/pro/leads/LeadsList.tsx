import { useLead } from "../../../store/pro/lead-context";
import LeadsListItem from "./LeadsListItem";

function LeadsList() {
  const { leads } = useLead();
  console.log(leads, "leadsss");

  const min = new Date().getMinutes();
  return (
    <div className="flex flex-col gap-3 ">
      {/* {leads &&
        leads.map((item) => {
          return (
            <LeadsListItem
              time={`${min - new Date(item.created_at).getMinutes()} min`}
              title={item.user.full_name}
              subTitle={[
                "TV Installation",
                "TV Wall Mounting",
                " CCTV Installation",
              ]}
              answers={["55 Inch TV ", " Brick Wall", " Pro  bracket"]}
              location="London, SE18"
              mincredits={6}
              maxcredits={3}
            />
          );
        })} */}

      <LeadsListItem
        time={"10 min"}
        title="Peter"
        subTitle={["TV Installation", "TV Wall Mounting", " CCTV Installation"]}
        answers={["55 Inch TV ", " Brick Wall", " Pro to supply bracket"]}
        location="London, SE18"
        mincredits={6}
        maxcredits={3}
      />
      <LeadsListItem
        time={"10 min"}
        title="Peter"
        subTitle={["TV Installation", "TV Wall Mounting", " CCTV Installation"]}
        answers={["55 Inch TV ", " Brick Wall", " Pro to supply bracket"]}
        location="London, SE18"
        mincredits={6}
        maxcredits={3}
      />
      <LeadsListItem
        time={"10 min"}
        title="Peter"
        subTitle={["TV Installation", "TV Wall Mounting", " CCTV Installation"]}
        answers={["55 Inch TV ", " Brick Wall", " Pro to supply bracket"]}
        location="London, SE18"
        mincredits={6}
        maxcredits={3}
      />
    </div>
  );
}

export default LeadsList;
