import AnswerItem from "./AnswerItem";

function AnswersSections(props: { array: any[] }) {
  return (
    <div className="py-7 grid lg:grid-cols-4 gap-7 w-full xs:grid-cols-1 ">
      {props.array.map((item) => {
        return (
          <div>
            <AnswerItem question={item.question} answer={item.answer} />
          </div>
        );
      })}
    </div>
  );
}

export default AnswersSections;
