function CompletedProjectTable() {
  return (
    <table className="w-full py-5 ">
      <tr className=" border-b-[0.5px] border-b-slate-300">
        <th className="py-5 text-left">Date</th>
        <th className="py-5 text-left">Request Type</th>
        <th className="py-5 text-left">Response</th>
      </tr>
      <tr className="border-b-[0.5px] border-b-slate-300">
        <td className="py-5 text-left">04/05/2023</td>
        <td className="py-5 text-left">TV Wall Mounting</td>
        <td className="py-5 text-left">02</td>
      </tr>
      <tr className="border-b-[0.5px] border-b-slate-300">
        <td className="py-5 text-left">02/05/2023</td>
        <td className="py-5 text-left">TV Repair</td>
        <td className="py-5 text-left">0</td>
      </tr>
    </table>
  );
}

export default CompletedProjectTable;
