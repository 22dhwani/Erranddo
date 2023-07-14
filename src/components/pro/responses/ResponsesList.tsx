import ResponsesListItem from "./ResponsesListItem";

function ResponsesList() {
  return (
    <div className="flex flex-col gap-3 ">
      <ResponsesListItem
        time={"10 min"}
        title="Peter"
        subTitle={["TV Installation", "TV Wall Mounting", " CCTV Installation"]}
        answers={["55 Inch TV ", " Brick Wall", " Pro  bracket"]}
        location="London, SE18"
      />
      <ResponsesListItem
        time={"10 min"}
        title="Peter"
        subTitle={["TV Installation", "TV Wall Mounting", " CCTV Installation"]}
        answers={["55 Inch TV ", " Brick Wall", " Pro to supply bracket"]}
        location="London, SE18"
      />
      <ResponsesListItem
        time={"10 min"}
        title="Peter"
        subTitle={["TV Installation", "TV Wall Mounting", " CCTV Installation"]}
        answers={["55 Inch TV ", " Brick Wall", " Pro to supply bracket"]}
        location="London, SE18"
      />
      <ResponsesListItem
        time={"10 min"}
        title="Peter"
        subTitle={["TV Installation", "TV Wall Mounting", " CCTV Installation"]}
        answers={["55 Inch TV ", " Brick Wall", " Pro to supply bracket"]}
        location="London, SE18"
      />
    </div>
  );
}

export default ResponsesList;
