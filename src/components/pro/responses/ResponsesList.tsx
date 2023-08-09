import { useLeadResponse } from "../../../store/pro/response-context";
import TableFooter from "../leads/TableFooter";
import ResponsesListItem from "./ResponsesListItem";

function ResponsesList() {
  const { leadsResponse, page, handlePrevPage, handleNextPage, setPage, total } = useLeadResponse();
  console.log(leadsResponse, "leadssss");

  console.log(Math.floor(total / 5), page);
  const min = new Date().getMinutes();

  return (
    <div className="flex flex-col gap-3 ">
      {leadsResponse && leadsResponse?.length > 0 ? (
        leadsResponse.map((item, key) => {
          const answers = item?.answers.map((answerItem) => answerItem.answer);
          const createdAt = item?.created_at ? new Date(item.created_at) : null;
          return (
            <ResponsesListItem
              time={`${min - (createdAt?.getMinutes() || 0)} min`}
              title={item?.user?.full_name}
              business={
                item?.user_bussiness?.name
                  ? `${item.user_bussiness.name}`
                  : "No business"
              }
              service={`${item?.service?.name} `}
              // subTitle={["Business Name - service name"]}
              answers={answers.length > 0 ? answers : ["No answers"]}
              location={`${item?.user?.city ?? "--"} , ${item?.postcode?.name ?? "--"
                }`}
              id={item?.id}
            />
          )
        })) : (
        <div className="justify-center items-center flex font-semibold text-textColor h-10">
          Oops! There are no leads
        </div>
      )}
      {leadsResponse && leadsResponse?.length > 0 && (
        <TableFooter
          valid={Math.ceil(total / 5) === page ? false : true}
          slice={leadsResponse ?? []}
          page={page}
          setPage={setPage}
          prev={handlePrevPage}
          next={handleNextPage}
        />
      )}
      {/* <ResponsesListItem
        time={"10 min"}
        title="Peter"
        subTitle={["Business Name - service name"]}
        answers={["answer1", " answer2", "answer3"]}
        location="London, SE18"
      />
      <ResponsesListItem
        time={"10 min"}
        title="Peter"
        subTitle={["Business Name - service name"]}
        answers={["answer1", " answer2", "answer3"]}
        location="London, SE18"
      /> */}
    </div>
  );
}

export default ResponsesList;
