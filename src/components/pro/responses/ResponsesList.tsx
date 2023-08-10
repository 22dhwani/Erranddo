import { useLeadResponse } from "../../../store/pro/response-context";
import TableFooter from "../leads/TableFooter";
import ResponsesListItem from "./ResponsesListItem";

function ResponsesList() {
  const {
    leadsResponse,
    page,
    handlePrevPage,
    handleNextPage,
    setPage,
    total,
  } = useLeadResponse();

  const min = new Date().getMinutes();

  return (
    <div className="flex flex-col gap-3 ">
      {leadsResponse && leadsResponse?.length > 0 ? (
        leadsResponse.map((item, key) => {
          const answers = item?.answers.map((answerItem) => answerItem.answer);
          const createdAt = item?.created_at ? new Date(item.created_at) : null;

          return (
            <ResponsesListItem
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
              id={item?.id}
            />
          );
        })
      ) : (
        <div className="justify-center items-center flex font-semibold text-textColor h-[64vh] bg-white rounded-lg">
          Oops! There are no responses
        </div>
      )}
      {leadsResponse && leadsResponse?.length > 0 && (
        <TableFooter
          valid={Math.ceil(total / 5) === page ? false : true}
          slice={leadsResponse ?? []}
          page={page}
          prev={handlePrevPage}
          next={handleNextPage}
        />
      )}
    </div>
  );
}

export default ResponsesList;
