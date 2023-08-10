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

          // if (createdAt) {
          //   if (createdAt < new Date()) {
          //     // Display the date if createdAt is less than latestDate
          //     // return <p>{createdDate.toDateString()}</p>;
          //     console.log(createdAt, "createdAt");

          //   } else {
          //     // Display hours if createdAt is the latest
          //     const hours = Math.floor((+new Date() - +createdAt) / (1000 * 60 * 60));
          //     console.log(hours, "hours");

          //     // return <p>{`${hours} hours ago`}</p>;
          //   }
          // }

          return (
            <ResponsesListItem
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
              location={`${item?.user?.city ?? "--"} , ${item?.postcode?.name ?? "--"
                }`}
              id={item?.id}
            />
          );
        })
      ) : (
        <div className="justify-center items-center flex font-semibold text-textColor h-10">
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
