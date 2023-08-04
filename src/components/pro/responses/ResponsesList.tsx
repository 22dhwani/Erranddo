import ResponsesListItem from "./ResponsesListItem";

function ResponsesList() {
  return (
    <div className="flex flex-col gap-3 ">
      <ResponsesListItem
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
      />
    </div>
  );
}

export default ResponsesList;
