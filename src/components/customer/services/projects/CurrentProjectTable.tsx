import { useNavigate } from "react-router";
import { Request } from "../../../../models/customer/requestlist";

function CurrentProjectTable(props: { data: Request[] }) {
  const requestData = props?.data
  const navigate = useNavigate()
  return (
    <table className="w-full py-5 dark:text-white">
      <tr className=" border-b-[0.5px] border-b-slate-300">
        <th className="py-5 text-left">Date</th>
        <th className="py-5 text-left">Request Type</th>
        <th className="py-5 text-left">Response</th>
      </tr>
      {requestData?.map(d => {
        if (d?.status === "PENDING") {
          const date = d?.created_at
          return (
            <tr className="border-b-[0.5px] border-b-slate-300 ">
              <td className="py-2 text-left"><button className="w-full p-2 text-left" onClick={() => navigate(`/services/service-detail/${d?.id}`)}>{date.split('T')[0]}</button></td>
              <td className="py-2 text-left"><button className="w-full p-2 text-left" onClick={() => navigate(`/services/service-detail/${d?.id}`)}>{d?.service?.name}</button></td>
              <td className="py-2 text-left"><button className="w-full p-2 text-left" onClick={() => navigate(`/services/service-detail/${d?.id}`)}>02</button></td>
            </tr>
          )
        }
      })}
    </table>
  );
}

export default CurrentProjectTable;
