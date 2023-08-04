import { Request } from "../../../../models/customer/requestlist";
function CompletedProjectTable(props: { data: Request[] }) {
  const completeRequestData = props?.data

  return (
    <table className="w-full py-5 dark:text-white">
      <tr className=" border-b-[0.5px] border-b-slate-300 dark:border-b-lineColor">
        <th className="py-5 text-left">Date</th>
        <th className="py-5 text-left">Request Type</th>
        <th className="py-5 text-left">Response</th>
      </tr>
      {completeRequestData?.map(d => {
        if (d?.status === "COMPLETED") {
          const date = d?.created_at
          return (
            <tr className="border-b-[0.5px] border-b-slate-300 dark:border-b-lineColor">
              <td className="py-2 text-left"><button className="w-full p-2 text-left">{date.split('T')[0]}</button></td>
              <td className="py-2 text-left"><button className="w-full p-2 text-left">{d?.service?.name}</button></td>
              <td className="py-2 text-left"><button className="w-full p-2 text-left">02</button></td>
            </tr>
          )
        }
      })}
    </table>
  );
}

export default CompletedProjectTable;
